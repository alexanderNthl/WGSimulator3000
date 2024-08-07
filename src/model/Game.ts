import { Config } from "../Config";

import { Score } from "./LocalScore";
import { CanvasArtist } from "../CanvasArtist";
import { World } from "./world/World";

import { dimension } from "../util/models";
import { AssetRepository } from "../assets/AssetRepository";
import { DrawableObjectTemplateRepository } from "../model/world/drawable/DrawableObjectTemplateRepository";
import { AudioPlayer } from "../audio/AudioPlayer";
import { UserControls } from "./UserControls";
import { GameStates } from "./GameStates";
import { GameStateDAO } from "./GameStateDAO";
import { Controller } from "../Contoller";

export class Game {
  private CONFIG: Config;

  private controller: Controller;

  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dimensions: dimension = { w: 0, h: 0 };

  private canvasArtist: CanvasArtist;
  private assetRepository: AssetRepository;
  private drawableObjectTemplateRepository: DrawableObjectTemplateRepository;
  private audioPlayer: AudioPlayer;

  private world: World;
  private initialCharacterId: string;

  private time: number;
  private rafId: number;

  private collided: boolean;
  private hitCollectable: boolean;
  private scoreBoard: Score;
  private gameState: GameStates;

  constructor(
    CONFIG: Config,
    controller: Controller,
    audioPlayer: AudioPlayer,
    assetRepository: AssetRepository
  ) {
    this.CONFIG = CONFIG;
    this.controller = controller;
    this.assetRepository = assetRepository;
    this.audioPlayer = audioPlayer;

    this.setupCanvas();

    this.scoreBoard = new Score();
    this.drawableObjectTemplateRepository =
      new DrawableObjectTemplateRepository(this.CONFIG);

    this.gameState = GameStates.IDLE;
  }

  private setupCanvas() {
    // TODO remove hard coded height
    // WARN altered for portfolio demo
    // this.setDimensions();
    const mockupWidth = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.MISC.MOCK_UP_CONTAINER
    ).offsetWidth;

    this.dimensions.w = mockupWidth * 0.93;
    this.dimensions.h = 400;

    this.container = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.MISC.GAME_CONTAINER
    );
    this.container.style.height = String(this.dimensions.h) + "px";
    this.container.style.width = String(this.dimensions.w) + "px";
    this.canvas = CanvasArtist.createCanvas(
      this.container,
      this.dimensions.w,
      this.dimensions.h
    );
    this.ctx = this.canvas.getContext("2d");

    this.canvasArtist = new CanvasArtist(
      this.dimensions.w,
      this.dimensions.h,
      this.ctx
    );
  }

  public setReady() {
    this.setupWorld();
    this.world.refresh(0);
    this.gameState = GameStates.READY;
    this.dispatchGameReadyEvent();
  }

  private setupWorld() {
    this.world = new World(
      this.CONFIG,
      this.dimensions.w,
      this.dimensions.h,
      this.ctx,
      this.drawableObjectTemplateRepository,
      this.assetRepository,
      this.audioPlayer,
      this.initialCharacterId
    );
    this.world.reset();
  }

  public handleUserControl(userControl: UserControls) {
    if (this.gameState !== GameStates.RUNNING) return;

    switch (userControl) {
      case UserControls.START_JUMP:
        this.world.getPlayer().startJump();
        break;
      case UserControls.END_JUMP:
        this.world.getPlayer().endJump();
      default:
        console.warn("unsupported user input: " + userControl);
    }
  }

  public startGame(): boolean {
    if (
      !(
        this.gameState === GameStates.READY ||
        this.gameState === GameStates.ENDED
      )
    ) {
      return false;
    }

    this.gameState = GameStates.RUNNING;

    this.canvasArtist.clear();
    this.world.refresh(0);

    this.collided = false;
    this.hitCollectable = false;
    this.scoreBoard.newGame();

    this.time = Date.now();

    this.handleRaf(this.runGame);
    return true;
  }

  public restart(): boolean {
    if (this.gameState !== GameStates.ENDED) {
      return false;
    }
    this.world.reset();
    return this.startGame();
  }

  public pauseGame(): boolean {
    if (this.gameState !== GameStates.RUNNING) {
      return false;
    } else {
      cancelAnimationFrame(this.rafId);
      this.gameState = GameStates.PAUSED;
      return true;
    }
  }

  public resumeGame(): boolean {
    if (this.gameState !== GameStates.PAUSED) {
      return false;
    } else {
      this.time = Date.now();
      this.handleRaf(this.runGame);
      this.gameState = GameStates.RUNNING;
      return true;
    }
  }

  public setCharacter(id: string) {
    if (this.world === undefined) {
      this.initialCharacterId = id;
    } else {
      this.world.setCharacter(id);
    }
  }

  public getStateAsDAO(): GameStateDAO {
    return new GameStateDAO(
      this.scoreBoard.getScore(),
      this.scoreBoard.getLocalHighScore(),
      this.gameState,
      this.world.getCharacterId()
    );
  }

  private runGame() {
    // Measure time difference since last frame
    let now = Date.now();
    let timeDiff = now - this.time;
    this.time = now;

    // Update score and game status
    this.scoreBoard.setScore(
      this.scoreBoard.getScore() +
        (timeDiff / 1000) * this.CONFIG.GAME_PLAY.pointsPerSecond
    );

    // Update and redraw world
    this.canvasArtist.clear();
    [this.collided, this.hitCollectable] = this.world.refresh(timeDiff);

    // Check collectables
    if (this.hitCollectable) {
      this.dispatchHitCollectableEvent();
      this.hitCollectable = false;
      this.scoreBoard.setScore(
        this.scoreBoard.getScore() + this.CONFIG.GAME_PLAY.pointsPerCollectable
      );
    }

    if (this.scoreBoard.hasNewLocalHighscore()) {
      this.dispatchNewLocalHighScoreEvent();
    }

    if (!this.collided) {
      this.handleRaf(this.runGame);
    } else {
      this.endGame();
    }
  }

  private handleRaf(callback: Function, parameter?: any) {
    this.rafId = requestAnimationFrame(callback.bind(this, parameter));
  }

  private endGame() {
    this.gameState = GameStates.ENDED;
    this.dispatchGameOverEvent();
  }

  private dispatchGameReadyEvent() {
    this.controller.onGameReady(this.getStateAsDAO());
  }

  private dispatchNewLocalHighScoreEvent() {
    this.controller.onNewLocalHighscore(this.getStateAsDAO());
  }

  private dispatchGameOverEvent() {
    this.controller.onGameOver(this.getStateAsDAO());
  }

  private dispatchHitCollectableEvent() {
    this.controller.onHitCollectable(this.getStateAsDAO());
  }

  private setDimensions() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    this.dimensions.w = Math.min(vw * 0.9, this.CONFIG.SETTINGS.maxCanvasWidth);
    this.dimensions.h = Math.min(
      vh * 0.6,
      this.CONFIG.SETTINGS.maxCanvasHeight
    );
  }
}
