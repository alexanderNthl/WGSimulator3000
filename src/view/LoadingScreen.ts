import { AssetRepository } from "../assets/AssetRepository";
import { AudioPlayer } from "../audio/AudioPlayer";
import { Config } from "../Config";
import { Controller } from "../Contoller";

export class LoadingScreen {
  private CONFIG: Config;

  private controller: Controller;
  private audioPlayer: AudioPlayer;

  private raf: number;

  private assetRepository: AssetRepository;

  private container: HTMLElement;
  private progressBar: HTMLElement;
  private label: HTMLElement;

  constructor(
    CONFIG: Config,
    controller: Controller,
    assetRepository: AssetRepository,
    audioPlayer: AudioPlayer
  ) {
    this.CONFIG = CONFIG;

    this.controller = controller;
    this.assetRepository = assetRepository;
    this.audioPlayer = audioPlayer;

    this.container = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.LOADING_SCREEN.PROGRESS_LABEL_CONTAINER
    );
    this.progressBar = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.LOADING_SCREEN.PROGRESS
    );
    this.label = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.LOADING_SCREEN.PROGRESS_LABEL
    );
  }

  public show() {
    this.container.hidden = false;
    this.run();
  }

  public hide() {
    cancelAnimationFrame(this.raf);
    this.container.hidden = true;
  }

  private run() {
    this.draw();
    this.handleRaf(this.run);
  }

  private draw() {
    const loadingProgress = this.assetRepository.getProgress();

    const cssRight = 100 * (0.97 - loadingProgress * 0.955);

    this.progressBar.style.right = String(cssRight) + "%";
    this.label.innerHTML =
      "Loading game..." + Math.floor(loadingProgress * 100) + "%";
  }

  private handleRaf(callback: Function, parameter?: any) {
    this.raf = requestAnimationFrame(callback.bind(this, parameter));
  }
}
