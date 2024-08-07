import { Animator } from "./Animator";
import { CollisionDetector } from "./collision/CollisionDetector";

import { Background } from "./drawable/Background";
import { Player } from "./drawable/Player";
import { PlayerTemplate } from "./drawable/PlayerTemplate";
import { Obstacle } from "./drawable/Obstacle";
import { CollectableItem } from "./drawable/CollectableItem";
import { RewardExplosion } from "./drawable/RewardExplosion";
import {
  DrawableObjectTemplate,
  scaleDrawableTempalte,
} from "./drawable/DrawableObjectTemplate";
import { DrawableObjectTemplateRepository } from "./drawable/DrawableObjectTemplateRepository";

import { velocity } from "../../util/models";
import { AssetRepository } from "../../assets/AssetRepository";
import { Config } from "../../Config";
import { AudioPlayer } from "../../audio/AudioPlayer";

export class World {
  private CONFIG: Config;

  private MEAN_DIST_BETWEEN_OBSTACLES = 28; // should be changed to distance
  private MEAN_DIST_VARIANCE = 300;
  private VELOCITY_INCREASE_DAMPING = 10000;
  private MAX_X_VELOCITY = -8;
  private FPS = 30;

  /**
   * Number of unique drawable templates before they may repeat
   */
  private MIN_UNIQUE_DRAWABLES_NUM = 3;
  private FLOOR_HEIGHT = 10;

  private width: number;
  private height: number;

  private ctx: CanvasRenderingContext2D;
  private animator: Animator;
  private drawableObjectTemplateRepository: DrawableObjectTemplateRepository;
  private assetReporitory: AssetRepository;
  private audioPlayer: AudioPlayer;

  private background: Background;

  private player: Player;
  private playerTemplate: PlayerTemplate;
  private characterId: string;
  private playerHitObstacle: boolean;
  private playerHitCollectable: boolean;

  private obstacles: Obstacle[];
  private obstacleGroundTemplates: DrawableObjectTemplate[];
  private lastObstacleIds: number[];
  private nextObstacleDist: number;
  private obstacleVelocity: velocity;

  private collectables: CollectableItem[];
  private collectableTemplates: DrawableObjectTemplate[];
  private lastCollectableIds: number[];
  private nextCollectableDist: number;
  private collectableVelocity: velocity;

  private rewardExplosions: RewardExplosion[];

  /**
   *
   * @param {number} w width
   * @param {number} h height
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(
    CONFIG: Config,
    w: number,
    h: number,
    ctx: CanvasRenderingContext2D,
    drawableObjectTemplateRepository: DrawableObjectTemplateRepository,
    assetReporitory: AssetRepository,
    audioPlayer: AudioPlayer,
    initialCharacterId: string
  ) {
    this.CONFIG = CONFIG;
    this.width = w;
    this.height = h;
    this.ctx = ctx;

    this.drawableObjectTemplateRepository = drawableObjectTemplateRepository;

    // Ensure valid character configuration (initialCharacterId fallback)
    this.setCharacter(
      drawableObjectTemplateRepository.getPlayerTemplates()[0].id
    );
    this.setCharacter(initialCharacterId);

    this.assetReporitory = assetReporitory;
    this.audioPlayer = audioPlayer;

    this.animator = new Animator();

    this.reset();
  }

  public reset() {
    // Reset Animator
    this.animator.unsubscribeAll();
    this.obstacleVelocity = { x: -3, y: 0 }; // TODO not clean with only one velocity

    this.background = new Background(
      0,
      0,
      this.width,
      this.height,
      this.obstacleVelocity,
      this.drawableObjectTemplateRepository.getBackgroundTemplates()[0]
    );
    this.animator.subscribe(this.background);

    // TODO remove magic number height? Shift math to object
    const playerTemplate =
      this.drawableObjectTemplateRepository.getPlayerTemplate(this.characterId);
    this.player = new Player(
      this.CONFIG,
      this.width / 4,
      this.height - this.playerTemplate.dimensions.h - this.FLOOR_HEIGHT - 1,
      this.height - this.FLOOR_HEIGHT,
      playerTemplate.dimensions.h,
      playerTemplate,
      this.audioPlayer
    );
    this.animator.subscribe(this.player);

    // Reset Obstacles
    this.obstacles = [];
    this.obstacleGroundTemplates =
      this.drawableObjectTemplateRepository.getObstacleTemplates();
    this.nextObstacleDist = this.calcNextObstacleDist();
    this.lastObstacleIds = [];
    this.playerHitObstacle = false;

    // Reset Collectables
    this.collectables = [];
    this.collectableTemplates =
      this.drawableObjectTemplateRepository.getCollectableTemplates();
    this.nextCollectableDist = this.calcNextCollectableDist();
    this.lastCollectableIds = [];
    this.playerHitCollectable = false;

    this.rewardExplosions = [];
  }

  public getPlayer() {
    if (this.player) {
      return this.player;
    }
  }

  public setCharacter(characterId: string) {
    let playerTemplate =
      this.drawableObjectTemplateRepository.getPlayerTemplate(characterId);
    if (playerTemplate != undefined) {
      this.playerTemplate = playerTemplate;
      this.characterId = characterId;
      return;
    }
    console.error(`No player template for id "${characterId}"`);
    if (this.characterId == null) {
      this.playerTemplate =
        this.drawableObjectTemplateRepository.getPlayerTemplates()[0];
      this.characterId = this.playerTemplate.id;
    }
  }

  public getCharacterId(): string {
    return this.characterId;
  }

  /**
   *
   * @param {number} timeDiff time difference between this and last update in millis
   */
  public refresh(timeDiff): [boolean, boolean] {
    let frames = (timeDiff / 1000) * this.FPS;

    this.updateObstacles();
    this.updateCollectables();

    // Reduce next ... distances
    this.nextObstacleDist -= frames * this.obstacleVelocity.x * -0.2;
    this.nextCollectableDist -= frames * this.obstacleVelocity.x * -0.2;

    // Refresh all drawable objects
    this.animator.update(timeDiff);

    this.increaseSpeed(timeDiff);

    // Check collisions
    this.playerHitObstacle = CollisionDetector.collided(
      this.player,
      this.obstacles[0]
    );
    this.playerHitCollectable = CollisionDetector.collided(
      this.player,
      this.collectables[0]
    );

    if (this.playerHitObstacle) {
      this.player.setCrashed();
    }

    this.animator.draw(this.ctx);

    if (this.playerHitCollectable) {
      this.addRewardExplosion(this.collectables[0]);
      this.collectables.shift();
    }

    return [this.playerHitObstacle, this.playerHitCollectable];
  }

  private updateObstacles() {
    // Add new obstacles
    if (this.nextObstacleDist < 0) {
      let nextObstacleIndex;
      do {
        nextObstacleIndex = Math.floor(
          Math.random() * this.obstacleGroundTemplates.length
        );
      } while (this.lastObstacleIds.includes(nextObstacleIndex));

      this.lastObstacleIds.push(nextObstacleIndex);
      if (this.lastObstacleIds.length >= this.MIN_UNIQUE_DRAWABLES_NUM) {
        this.lastObstacleIds.shift();
      }

      let nextObstacleTemplate = scaleDrawableTempalte(
        this.obstacleGroundTemplates[nextObstacleIndex],
        0.28
      );
      let nextObstacle = new Obstacle(
        this.CONFIG,
        this.width,
        this.height - nextObstacleTemplate.dimensions.h - this.FLOOR_HEIGHT,
        0,
        0,
        this.obstacleVelocity,
        nextObstacleTemplate
      );

      this.obstacles.push(nextObstacle);
      this.animator.subscribe(nextObstacle);
      this.nextObstacleDist = this.calcNextObstacleDist();
    }

    // Remove non-visible obstacles // TODO get width instead of magic number
    if (
      this.obstacles.length > 0 &&
      this.obstacles[0].getX() + this.obstacles[0].getWidth() < 0
    ) {
      this.animator.unsubscribe(this.obstacles[0]);
      this.obstacles.shift();
    }
  }

  private updateCollectables() {
    // Add new collectable
    if (this.nextCollectableDist < 0) {
      let nextCollectableIndex;
      do {
        nextCollectableIndex = Math.floor(
          Math.random() * this.collectableTemplates.length
        );
      } while (this.lastCollectableIds.includes(nextCollectableIndex));

      this.lastCollectableIds.push(nextCollectableIndex);
      if (this.lastCollectableIds.length >= this.MIN_UNIQUE_DRAWABLES_NUM) {
        this.lastCollectableIds.shift();
      }

      let nextCollectableTemplate = scaleDrawableTempalte(
        this.collectableTemplates[nextCollectableIndex],
        0.28
      );
      let nextCollectable = new CollectableItem(
        this.CONFIG,
        this.width,
        this.height * 0.3 - nextCollectableTemplate.dimensions.h,
        0,
        0,
        this.obstacleVelocity,
        nextCollectableTemplate
      );

      this.collectables.push(nextCollectable);
      this.animator.subscribe(nextCollectable);
      this.nextCollectableDist = this.calcNextCollectableDist();
    }

    // Remove non-visible collectables
    if (this.collectables.length > 0 && this.collectables[0].getX() < -20) {
      this.animator.unsubscribe(this.collectables[0]);
      this.collectables.shift();
    }
  }

  private increaseSpeed(timeDiff) {
    if (this.obstacleVelocity.x > this.MAX_X_VELOCITY) {
      this.obstacleVelocity.x -= timeDiff / this.VELOCITY_INCREASE_DAMPING;
      this.obstacles.forEach((obstacle) =>
        obstacle.setVelocity(this.obstacleVelocity)
      );
      this.background.setVelocity(this.obstacleVelocity);
      this.collectables.forEach((collectable) =>
        collectable.setVelocity(this.obstacleVelocity)
      );
    }
  }

  private calcNextObstacleDist(): number {
    return (Math.random() + 2) * this.MEAN_DIST_BETWEEN_OBSTACLES;
  }

  private calcNextCollectableDist(): number {
    return (Math.random() + 1) * this.MEAN_DIST_BETWEEN_OBSTACLES * 3;
  }

  private addRewardExplosion(collectable: CollectableItem) {
    let rewardExplosion = new RewardExplosion(
      collectable.getX(),
      collectable.getY(),
      this.assetReporitory
    );
    this.rewardExplosions.push(rewardExplosion);
    setTimeout(this.shiftRewardExplosions.bind(this), 400);
    this.animator.subscribe(rewardExplosion);
    this.animator.unsubscribe(collectable);
  }

  private shiftRewardExplosions() {
    this.animator.unsubscribe(this.rewardExplosions[0]);
    this.rewardExplosions.shift();
  }
}
