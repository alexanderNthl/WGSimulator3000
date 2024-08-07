import { Config } from "./Config";
import { Game } from "./model/Game";

import { AssetRepository } from "./assets/AssetRepository";
import { AudioPlayer } from "./audio/AudioPlayer";

import { LoadingScreen } from "./view/LoadingScreen";
import { GameOverScreen } from "./view/GameOverScreen";
import { IntroScreen } from "./view/IntroScreen";
import { InGameInfoScreen } from "./view/InGameInfoScreen";
import { ControlTutorial } from "./view/ControlTutorial";

import { UserControls } from "./model/UserControls";
import { GameStateDAO } from "./model/GameStateDAO";
import { ScoreManagerDAO } from "./score/ScoreManagerDAO";
import { ScoreManager } from "./score/ScoreManager";
import { UserManager } from "./UserManager";

/**
 * Acts as the controller between Model (Game.ts) and View (screens/*.ts)
 */
export class Controller {
  private CONFIG = new Config();

  private game: Game;

  private assetRepository: AssetRepository;
  private audioPlayer: AudioPlayer;

  private userManager: UserManager;
  private scoreManager: ScoreManager;

  private loadingScreen: LoadingScreen;
  private gameOverScreen: GameOverScreen;
  private introScreen: IntroScreen;
  private inGameInfoScreen: InGameInfoScreen;
  private controlTutorial: ControlTutorial;

  private touchController: HTMLElement;
  private isMobile: boolean;

  constructor() {
    this.assetRepository = new AssetRepository(
      this.CONFIG.IMAGES,
      this.CONFIG.AUDIOS,
      new Array(
        ...this.CONFIG.BACKGROUND_TEMPLATES,
        ...this.CONFIG.COLLECTABLES_TEMPLATES,
        ...this.CONFIG.OBSTACLES_GRND_TEMPLATES,
        ...this.CONFIG.PLAYER_TEMPLATES
      )
    );
    this.audioPlayer = new AudioPlayer(this.assetRepository);
    this.game = new Game(
      this.CONFIG,
      this,
      this.audioPlayer,
      this.assetRepository
    );

    this.scoreManager = new ScoreManager(this.CONFIG);
    this.userManager = new UserManager();

    this.setupScreens();
    this.setupControls();

    this.loadAssets();
  }

  public startGame(): boolean {
    this.audioPlayer.activate();
    if (this.game.startGame()) {
      this.addTouchController();
      this.inGameInfoScreen.show();
      this.controlTutorial.show();
      this.audioPlayer.playSound("main-theme", true, true);
      return true;
    }
    return false;
  }

  public restartGame(): boolean {
    if (this.game.restart()) {
      this.gameOverScreen.hide();
      this.inGameInfoScreen.show();
      this.controlTutorial.show();
      this.addTouchController();
      this.audioPlayer.playSound("main-theme", true, true);
      return true;
    }
    return false;
  }

  public pauseGame(): boolean {
    if (this.game.pauseGame()) {
      this.audioPlayer.pausePlayback();

      return true;
    }
    return false;
  }

  public resumeGame(): boolean {
    if (this.game.resumeGame()) {
      this.audioPlayer.resumePlayback();
      return true;
    }
    return false;
  }

  public setMuted(muted: boolean) {
    this.audioPlayer.setMute(muted);
  }

  public setCharacter(id: string) {
    this.game.setCharacter(id);
  }

  public getGameStateDAO(): GameStateDAO {
    return this.game.getStateAsDAO();
  }

  public async getScoreManagerDAO(): Promise<ScoreManagerDAO> {
    return this.scoreManager.getScoreManagerDAO();
  }

  public onGameReady(gameStateDao: GameStateDAO) {
    this.loadingScreen.hide();
    this.introScreen.show();
  }

  public onGameOver(gameStateDao: GameStateDAO) {
    this.audioPlayer.stopSound("main-theme");
    this.audioPlayer.playSound("game-over");

    this.removeTouchController();
    this.inGameInfoScreen.hide();
    this.controlTutorial.hide();

    this.gameOverScreen.show();

    if (this.userManager.getPlayerAlias() !== null) {
      this.triggerScoreUploadAndTableUpdate(gameStateDao);
      return;
    }

    if (this.userManager.getIsWaitingForAlias()) {
      this.gameOverScreen.getPlayerAlias().then((alias) => {
        if (alias !== null) {
          this.userManager.setPlayerAlias(alias);
          this.triggerScoreUploadAndTableUpdate(gameStateDao);
        } else {
          this.userManager.setWaitingForAlias(false);
          this.gameOverScreen.triggerScoreTableUpdate();
        }
      });
    } else {
      this.gameOverScreen.triggerScoreTableUpdate();
    }
  }

  private triggerScoreUploadAndTableUpdate(gameStateDao: GameStateDAO) {
    this.scoreManager
      .uploadScore(gameStateDao.currentScore, this.userManager.getPlayerAlias())
      .then(() => this.gameOverScreen.triggerScoreTableUpdate())
      .catch(() => this.gameOverScreen.triggerScoreTableUpdate());
  }

  public onNewLocalHighscore(gameStateDao: GameStateDAO) {
    this.inGameInfoScreen.notifyNewHighscore();
  }

  public onHitCollectable(gameStateDao: GameStateDAO) {
    this.audioPlayer.playSound("collectable");
    this.inGameInfoScreen.notifyHitCollectable();
  }

  private setupScreens() {
    // TODO DAO
    this.gameOverScreen = new GameOverScreen(
      this.CONFIG,
      this,
      this.audioPlayer,
      this.assetRepository
    );
    this.loadingScreen = new LoadingScreen(
      this.CONFIG,
      this,
      this.assetRepository,
      this.audioPlayer
    );
    this.introScreen = new IntroScreen(this.CONFIG, this, this.audioPlayer);
    this.inGameInfoScreen = new InGameInfoScreen(
      this.CONFIG,
      this,
      this.assetRepository,
      this.audioPlayer
    );
    this.controlTutorial = new ControlTutorial(
      this.CONFIG,
      this,
      this.assetRepository
    );
  }

  private setupControls() {
    // TODO no effect
    this.isMobile = true;
    this.touchController = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.MISC.TOUCH_CONTROLLER
    );
    this.touchController.hidden = true;

    // Register listeners
    document.addEventListener("keydown", this.handleEvents.bind(this));
    this.touchController.addEventListener(
      "touchstart",
      this.handleEvents.bind(this)
    );
    document.addEventListener("keyup", this.handleEvents.bind(this));
    this.touchController.addEventListener(
      "touchend",
      this.handleEvents.bind(this)
    );

    // TODO does not work
    window.addEventListener("onblur", this.pauseGame.bind(this));
    window.addEventListener("onFocus", this.resumeGame.bind(this));
  }

  private loadAssets() {
    this.loadingScreen.show();

    this.assetRepository.fetchAssets().then((success) => {
      if (success) {
        this.game.setReady();
        this.gameOverScreen.notifyAssetsLoaded();
      } else {
        console.error("Unable to load assets");
      }
    });
  }

  private handleEvents(e) {
    if (
      (e.type === "keydown" && e.keyCode == this.CONFIG.KEY_CODES.jump) ||
      e.type == "touchstart"
    ) {
      e.preventDefault();
      this.game.handleUserControl(UserControls.START_JUMP);
    } else if (
      (e.type === "keyup" && e.keyCode == this.CONFIG.KEY_CODES.jump) ||
      e.type == "touchend"
    ) {
      e.preventDefault();
      this.game.handleUserControl(UserControls.END_JUMP);
    }
  }

  private addTouchController() {
    this.touchController.hidden = false;
  }

  private removeTouchController() {
    this.touchController.hidden = true;
  }
}
