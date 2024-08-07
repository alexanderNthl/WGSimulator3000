import { isMobile, isTouchDevice } from "../util/deviceDiscovery";

import { Config } from "../Config";
import { Controller } from "../Contoller";
import { AssetRepository } from "../assets/AssetRepository";

export class ControlTutorial {
  private CONFIG: Config;

  private controller: Controller;
  private assetRepository: AssetRepository;

  private container: HTMLElement;
  private image: HTMLImageElement;
  private label: HTMLElement;

  private touchController: HTMLElement;

  private showTutorial: boolean;

  constructor(
    CONFIG: Config,
    controller: Controller,
    asssetRepository: AssetRepository
  ) {
    this.CONFIG = CONFIG;

    this.controller = controller;
    this.assetRepository = asssetRepository;

    this.container = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.CONTROL_TUTORIAL.CONTAINER
    );
    this.image = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.CONTROL_TUTORIAL.IMAGE
    ) as HTMLImageElement;
    this.label = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.CONTROL_TUTORIAL.LABEL
    );
    this.touchController = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.MISC.TOUCH_CONTROLLER
    );

    this.showTutorial = true;

    this.setupElement();
  }

  public show() {
    if (isMobile() && isTouchDevice()) {
      this.image.src = this.assetRepository.getImage("touch-indicator").src;
      this.label.innerHTML = "Tap to jump";
    } else {
      this.image.src = this.assetRepository.getImage("spacebar-indicator").src;
      this.label.innerHTML = "Press SPACE to jump";
    }

    if (this.showTutorial) {
      this.setupElement();
      this.container.style.display = "flex";
    }
  }

  public hide() {
    this.container.style.display = "none";
    document.removeEventListener("keydown", this.handleEvents.bind(this));
    this.touchController.removeEventListener(
      "touchstart",
      this.handleEvents.bind(this)
    );
  }

  private handleEvents(e) {
    if (
      (e.type === "keydown" && e.keyCode == this.CONFIG.KEY_CODES.jump) ||
      e.type == "touchstart"
    ) {
      this.hide();
      this.showTutorial = false;
    }
  }

  private setupElement() {
    document.addEventListener("keydown", this.handleEvents.bind(this));
    this.touchController.addEventListener(
      "touchstart",
      this.handleEvents.bind(this)
    );
  }
}
