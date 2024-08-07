import { AssetRepository } from "./assets/AssetRepository";

// Seems like a useless class
export class CanvasArtist {
  private width: number;
  private height: number;

  private ctx: CanvasRenderingContext2D;

  /**
   *
   * @param {number} w width
   * @param {number} h height
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(w, h, ctx) {
    (this.width = w), (this.height = h), (this.ctx = ctx);
  }

  public static createCanvas(
    container: HTMLElement,
    w: number,
    h: number
  ): HTMLCanvasElement {
    let canvas = document.createElement("canvas") as HTMLCanvasElement;
    canvas.id = "game-canvas";
    canvas.width = w;
    canvas.height = h;
    canvas.classList.add("wg-sim-game-canvas");
    container.insertAdjacentElement("afterbegin", canvas);
    return canvas;
  }

  public clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}
