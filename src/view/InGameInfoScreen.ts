import { AudioPlayer } from "../audio/AudioPlayer";
import { Config } from "../Config";
import { Controller } from "../Contoller";
import { AssetRepository } from "../assets/AssetRepository";

export class InGameInfoScreen {
  private BACKGROUND_IMAGE_PATH = "/assets/uploads/intro-bg.png";
  private REFRESH_TIME = 100;
  private LEAVE_ANIMATION_DURATION = 500;

  private CONFIG: Config;

  private controller: Controller;
  private assetRepository: AssetRepository;
  private audioPlayer: AudioPlayer;

  private container: HTMLElement;
  private pauseButton: HTMLButtonElement;
  private pauseIcon: HTMLImageElement;
  private muteButton: HTMLButtonElement;
  private muteIcon: HTMLImageElement;
  private scoreContainer: HTMLElement;
  private scoreLabel: HTMLElement;
  private hitCollectable: HTMLElement;

  private refreshScoreId;

  private isPaused: boolean;
  private isMuted: boolean;

  constructor(
    CONFIG: Config,
    controller: Controller,
    asssetRepository: AssetRepository,
    audioPlayer: AudioPlayer
  ) {
    this.CONFIG = CONFIG;

    this.controller = controller;
    this.assetRepository = asssetRepository;
    this.audioPlayer = audioPlayer;

    this.container = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.CONTAINER
    );
    this.pauseButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.PAUSE_BUTTON
    ) as HTMLButtonElement;
    this.muteButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.MUTE_BUTTON
    ) as HTMLButtonElement;
    this.scoreContainer = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.SCORE_CONTAINER
    );
    this.scoreLabel = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.SCORE_LABEL
    );
    this.hitCollectable = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.IN_GAME_INFO_SCREEN.HIT_COLLECTABLE
    );

    this.setupElement();

    this.isPaused = false;
    this.isMuted = false;
  }

  public show() {
    this.scoreLabel.style.animationName = "";
    this.pauseIcon.src = this.assetRepository.getImage("iconPause").src;
    if (this.isMuted) {
      this.muteIcon.src = this.assetRepository.getImage("iconMute").src;
    } else {
      this.muteIcon.src = this.assetRepository.getImage("iconSound").src;
    }

    this.container.style.animationName = "";
    this.container.style.display = "flex";
    this.refreshScoreId = setInterval(
      this.updatePanel.bind(this),
      this.REFRESH_TIME
    );
  }

  public hide() {
    clearInterval(this.refreshScoreId);
    this.container.style.animationName = "wg-sim-in-game-info-animation";
    setTimeout(() => {
      this.container.style.display = "none";
    }, this.LEAVE_ANIMATION_DURATION);
  }

  public notifyNewHighscore() {
    this.scoreLabel.style.animationName = "wg-sim-ingame-highscore-animation";
    this.audioPlayer.playSound("new-ingame-highscore");
  }

  public notifyHitCollectable() {
    this.hitCollectable.style.display = "block";
    setTimeout(() => (this.hitCollectable.style.display = "none"), 1000);
  }

  private updatePanel() {
    const gameStateDAO = this.controller.getGameStateDAO();
    this.scoreLabel.innerHTML = String(Math.round(gameStateDAO.currentScore));
  }

  private handlePauseGame() {
    // TODO could lead to invalid button because return type is not verified
    if (!this.isPaused) {
      this.pauseIcon.src = this.assetRepository.getImage("iconPlay").src;
      this.controller.pauseGame();
    } else {
      this.pauseIcon.src = this.assetRepository.getImage("iconPause").src;
      this.controller.resumeGame();
    }
    this.isPaused = !this.isPaused;
  }

  private handleMuteGame() {
    // TODO invalid state after restart
    // TODO could lead to invalid button because return type is not verified
    if (!this.isMuted) {
      this.muteIcon.src = this.assetRepository.getImage("iconMute").src;
      this.controller.setMuted(true);
    } else {
      this.muteIcon.src = this.assetRepository.getImage("iconSound").src;
      this.controller.setMuted(false);
    }
    this.isMuted = !this.isMuted;
  }

  private setupElement() {
    this.container.style.animationDuration =
      String(this.LEAVE_ANIMATION_DURATION / 1000) + "s";
    this.hitCollectable.innerHTML =
      "+" + String(this.CONFIG.GAME_PLAY.pointsPerCollectable);

    this.pauseIcon = this.pauseButton.appendChild(new Image());
    this.muteIcon = this.muteButton.appendChild(new Image());

    this.pauseButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.muteButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );

    this.pauseButton.addEventListener("click", this.handlePauseGame.bind(this));
    this.muteButton.addEventListener("click", this.handleMuteGame.bind(this));
  }
}
