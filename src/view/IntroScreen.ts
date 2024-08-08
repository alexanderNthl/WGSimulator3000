import { AudioPlayer } from "../audio/AudioPlayer";
import { Config } from "../Config";
import { Controller } from "../Contoller";

export class IntroScreen {
  private BACKGROUND_IMAGE_PATH = "/assets/uploads/intro-bg.svg";

  private LEAVE_ANIMATION_DURATION = 1800;

  private CONFIG: Config;

  private controller: Controller;
  private audioPlayer: AudioPlayer;

  private container: HTMLElement;
  private panel: HTMLElement;
  private startButton: HTMLButtonElement;

  constructor(
    CONFIG: Config,
    controller: Controller,
    audioPlayer: AudioPlayer
  ) {
    this.CONFIG = CONFIG;

    this.controller = controller;
    this.audioPlayer = audioPlayer;

    this.container = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.INTRO_SCREEN.CONTAINER
    );
    this.panel = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.INTRO_SCREEN.PANEL
    );
    this.startButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.INTRO_SCREEN.START_BUTTON
    ) as HTMLButtonElement;
    this.setupElement();
  }

  public show() {
    this.container.style.animationName = null;
    this.container.style.display = "block";
  }

  public hide() {
    this.container.style.animationName = "wg-sim-game-intro-animation";
    setTimeout(() => {
      this.container.style.display = "none";
    }, this.LEAVE_ANIMATION_DURATION);
  }

  private onStart() {
    this.startButton.removeEventListener("click", this.onStart);
    this.hide();
    setTimeout(() => {
      this.controller.startGame();
    }, this.LEAVE_ANIMATION_DURATION);
  }

  private setupElement() {
    this.container.style.animationDuration =
      String(this.LEAVE_ANIMATION_DURATION / 1000) + "s";
    this.panel.style.backgroundImage = `url(${this.BACKGROUND_IMAGE_PATH})`;

    this.startButton.addEventListener("click", this.onStart.bind(this));
    this.startButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
  }
}
