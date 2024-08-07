import { Config } from "../../Config";
import { AssetRepository } from "../../assets/AssetRepository";
import { AudioPlayer } from "../../audio/AudioPlayer";

export class SelectPlayerDialog {
  private readonly CANVAS_WIDTH = 130;
  private readonly CANVAS_HEIGHT = 180;

  private CONFIG: Config;

  private assetRepository: AssetRepository;
  private audioPlayer: AudioPlayer;

  private container: HTMLDialogElement;
  private carousel: HTMLElement;
  private carouselNavLeft: HTMLElement;
  private carouselNavRight: HTMLElement;
  private nameDisplay: HTMLElement;
  private submitButton: HTMLButtonElement;
  private escapeIcon: HTMLElement;

  private currentIndex: number;

  constructor(
    CONFIG: Config,
    audioPlayer: AudioPlayer,
    assetResporitory: AssetRepository
  ) {
    this.CONFIG = CONFIG;

    this.assetRepository = assetResporitory;
    this.audioPlayer = audioPlayer;

    this.currentIndex = 0;

    this.container = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.CONTAINER
    ) as HTMLDialogElement;
    this.carousel = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.CAROUSEL
    ) as HTMLElement;
    this.carouselNavLeft = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER
        .CAROUSEL_NAV_LEFT
    ) as HTMLElement;
    this.carouselNavRight = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER
        .CAROUSEL_NAV_RIGHT
    ) as HTMLElement;
    this.nameDisplay = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.NAME_DISPLAY
    ) as HTMLElement;
    this.submitButton = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.BUTTON_SUBMIT
    ) as HTMLButtonElement;
    this.escapeIcon = document.getElementById(
      CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SELECT_PLAYER.ESC_ICON
    ) as HTMLElement;

    this.setupElement();
  }

  public setPlayerIndex(index: number) {
    if (index < 0 || index >= this.CONFIG.PLAYER_TEMPLATES.length) {
      return;
    }
    this.currentIndex = index;
    this.scroll(index - this.currentIndex);
  }

  public getPlayerIndex(): number {
    return this.currentIndex;
  }

  public async show(): Promise<number> {
    this.container.show();

    return new Promise((resolve, reject) => {
      this.submitButton.addEventListener("click", () => {
        this.hide();
        resolve(this.currentIndex);
      });
      this.escapeIcon.addEventListener("click", () => {
        this.hide();
        resolve(this.currentIndex);
      });
    });
  }

  public hide() {
    this.container.close();
  }

  public setupCarousel() {
    this.carousel.innerHTML = "";

    this.CONFIG.PLAYER_TEMPLATES.forEach((charachter) => {
      const canvas = document.createElement("canvas") as HTMLCanvasElement;
      canvas.width = this.CANVAS_WIDTH;
      canvas.height = this.CANVAS_HEIGHT;
      canvas.style.width = this.CANVAS_WIDTH + "px";
      canvas.style.height = this.CANVAS_HEIGHT + "px";
      canvas.classList.add("wg-sim-select-player-dialog-carousel-item");
      this.carousel.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      const img = this.assetRepository.getImage(charachter.id);

      const canvasRatio = this.CANVAS_WIDTH / this.CANVAS_HEIGHT;
      let widthIsDominant = true;
      if (canvasRatio > charachter.frameWidth / charachter.dimensions.h) {
        widthIsDominant = false;
      }

      const dWidth = widthIsDominant
        ? this.CANVAS_WIDTH
        : charachter.frameWidth *
          (this.CANVAS_HEIGHT / charachter.dimensions.h);
      const dHeight = !widthIsDominant
        ? this.CANVAS_HEIGHT
        : charachter.dimensions.h * (this.CANVAS_WIDTH / charachter.frameWidth);
      const dx = widthIsDominant ? 0 : (this.CANVAS_WIDTH - dWidth) / 2;
      const dy = !widthIsDominant ? 0 : (this.CANVAS_HEIGHT - dHeight) / 2;

      ctx.shadowColor = "#444444";
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 0;
      ctx.drawImage(
        img,
        0,
        0,
        charachter.frameWidth,
        charachter.dimensions.h,
        dx,
        dy,
        dWidth,
        dHeight
      );
    });
  }

  private scroll(direction: number) {
    this.currentIndex = this.mod(
      this.currentIndex + direction,
      this.CONFIG.PLAYER_TEMPLATES.length
    );
    const xPosition = this.carousel.offsetWidth * this.currentIndex;

    this.carousel.scrollTo({
      top: 0,
      left: xPosition,
      behavior: "smooth",
    });
  }

  private handleScrollEvent() {
    this.currentIndex = Math.round(
      this.carousel.scrollLeft / this.carousel.offsetWidth
    );

    this.nameDisplay.innerText =
      this.CONFIG.PLAYER_TEMPLATES[this.currentIndex].displayName;
  }

  private mod(number: number, modulos: number) {
    return ((number % modulos) + modulos) % modulos;
  }

  private setupElement() {
    this.carousel.addEventListener("scroll", () => this.handleScrollEvent());
    this.carouselNavLeft.addEventListener("click", () => this.scroll(-1));
    this.carouselNavRight.addEventListener("click", () => this.scroll(1));

    this.carouselNavLeft.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.carouselNavRight.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.submitButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.escapeIcon.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
  }
}
