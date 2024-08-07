import { DrawableObject } from "./DrawableObject";
import { RectHitBox } from "../collision/RectHitBox";
import { Hitable } from "../collision/Hitable";
import {
  PlayerTemplate,
  scalePlayerTemplate,
  stateFrameDescription,
} from "./PlayerTemplate";
import { Config } from "../../../Config";
import { AudioPlayer } from "../../../audio/AudioPlayer";

export enum PlayerState {
  RUNNING,
  JUMPING,
  CRASHED,
}

export class Player extends DrawableObject implements Hitable {
  private CONFIG: Config;

  private MIN_Y = null;
  private GRAVITY = 3;
  private JUMP_VELOCITY = -35;
  private MAX_JUMP_TIME = 500;

  private FPS = 1 / 40;

  private audioPlayer: AudioPlayer;

  private x: number;
  private y: number;
  private width: number;
  private height: number;

  private yVelocity: number;
  private state: PlayerState;
  private jumpStart: number;

  private hitBoxes: RectHitBox[] = [];

  private img: HTMLImageElement;
  private dropsShadow: boolean;

  private drawWidth: number;
  private drawHeight: number;

  private numOfFrames: number;
  private currStateDescr: stateFrameDescription;
  private timeToNextFrame: number;
  private currFrame: number;

  private template: PlayerTemplate;

  constructor(
    CONFIG: Config,
    x,
    y,
    MIN_Y,
    height,
    template: PlayerTemplate,
    audioPlayer: AudioPlayer,
    shadow = true
  ) {
    super();
    this.CONFIG = CONFIG;
    this.audioPlayer = audioPlayer;

    let scaleFactor = height / template.dimensions.h;

    this.MIN_Y = MIN_Y - height;

    this.x = x - template.frameWidth / 2;
    this.y = y;
    this.yVelocity = 0;
    this.state = PlayerState.RUNNING;

    this.width = template.frameWidth;
    this.height = template.dimensions.h;

    this.template = scalePlayerTemplate(template, scaleFactor);
    // Hitboxes
    for (let hitBox of this.template.hitBoxes) {
      this.hitBoxes.push(
        new RectHitBox(
          this.x + hitBox.xOff,
          this.y + hitBox.yOff,
          hitBox.w,
          hitBox.h
        )
      );
    }

    // Drawing data
    this.img = template.image;
    this.dropsShadow = shadow;
    this.drawHeight = height;
    this.drawWidth = template.frameWidth * scaleFactor;

    // Animation
    this.numOfFrames = template.frames;
    this.currStateDescr = template.jumping;
    this.currFrame = this.currStateDescr.startFrame;
    this.timeToNextFrame = this.currStateDescr.msPerFrame;
  }

  public getHitBoxes() {
    return this.hitBoxes;
  }

  public setCrashed() {
    this.currStateDescr = this.template.crashed;
    this.currFrame = this.currStateDescr.startFrame;
    this.timeToNextFrame = this.currStateDescr.msPerFrame;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  public draw(ctx): void {
    if (this.CONFIG.SETTINGS.debugIsEnabled) {
      ctx.fillStyle = "yellow";
      ctx.fillRect(
        this.hitBoxes[0].getX(),
        this.hitBoxes[0].getY(),
        this.hitBoxes[0].getWidth(),
        this.hitBoxes[0].getHeight()
      );
    }

    if (this.img) {
      ctx.save();
      if (this.dropsShadow) {
        ctx.shadowColor = "#444444";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 0;
      }

      ctx.drawImage(
        this.img,
        this.currFrame * this.width,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.drawWidth,
        this.drawHeight
      );
      ctx.restore();
    }
  }

  public update(timeDiff): void {
    // Update pos and hitboxes
    let framesPassed = timeDiff * this.FPS;
    let lastY = this.y;

    this.y += this.yVelocity * framesPassed;
    this.yVelocity += this.GRAVITY * framesPassed;

    if (this.y >= this.MIN_Y) {
      this.y = this.MIN_Y;
      this.yVelocity = 0;
    }

    this.hitBoxes.forEach((hitBox) => (hitBox.y += this.y - lastY));

    // Update drawing properties
    if (lastY < this.MIN_Y && this.y == this.MIN_Y) {
      this.state = PlayerState.RUNNING;
      this.timeToNextFrame = 0;
      this.currStateDescr = this.template.running;
      this.currFrame = this.currStateDescr.startFrame;
    }

    this.timeToNextFrame -= timeDiff;
    if (this.timeToNextFrame <= 0) {
      this.timeToNextFrame = this.currStateDescr.msPerFrame;

      this.currFrame =
        (this.currFrame + 1) %
        (this.currStateDescr.endFrame - this.currStateDescr.startFrame + 1);
    }
  }

  public startJump() {
    if (!this.template.canJump) {
      return;
    }

    if (this.y >= this.MIN_Y) {
      this.state = PlayerState.JUMPING;
      this.y -= 0.1;
      this.yVelocity = this.JUMP_VELOCITY;

      this.audioPlayer.playSound("jump");

      this.currStateDescr = this.template.jumping;
      this.jumpStart = new Date().getTime();

      this.currFrame = this.currStateDescr.startFrame;
      this.timeToNextFrame = this.currStateDescr.msPerFrame;
    }
  }

  public endJump() {
    if (this.state !== PlayerState.JUMPING) {
      return;
    }

    if (this.yVelocity < this.JUMP_VELOCITY / 2) {
      this.yVelocity = this.JUMP_VELOCITY / 2;
    }

    this.state = PlayerState.RUNNING;
  }
}
