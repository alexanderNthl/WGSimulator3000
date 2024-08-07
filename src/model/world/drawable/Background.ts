import { DrawableObject } from "./DrawableObject";

import { velocity } from "../../../util/models";
import { DrawableObjectTemplate } from "./DrawableObjectTemplate";

// TODO INTEGRATE SCALE FACTOR WITH WIDTH
export class Background extends DrawableObject {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private velocity: velocity;

  private cnvWidth: number;
  private cnvHeight: number;
  private scaleFactor: number;

  private img: HTMLImageElement;

  constructor(x, y, cnvW, cnvH, v, template: DrawableObjectTemplate) {
    super();
    this.x = x;
    this.y = y;
    this.velocity = v;

    this.img = template.image;
    this.width = template.dimensions.w;
    this.height = template.dimensions.h;

    // this._scaleFactor = cnvH / this._height;
    this.scaleFactor = 1;
    this.cnvWidth = cnvW;
    this.cnvHeight = cnvH;
  }

  setVelocity(velocity: velocity) {
    this.velocity = velocity;
  }

  public draw(ctx): void {
    if (this.img) {
      let sx = -(this.x * this.scaleFactor);
      let swidth = this.cnvWidth * this.scaleFactor;
      ctx.drawImage(
        this.img,
        sx,
        this.y,
        swidth,
        this.height,
        0,
        0,
        this.cnvWidth,
        this.cnvHeight
      );

      let backgroundLeft =
        this.width * this.scaleFactor - (this.cnvWidth - this.x);
      if (backgroundLeft <= 0) {
        let x = this.cnvWidth + backgroundLeft;
        swidth = (this.cnvWidth - x) * this.scaleFactor;
        ctx.drawImage(
          this.img,
          0,
          this.y,
          swidth,
          this.height,
          x,
          0,
          -backgroundLeft,
          this.cnvHeight
        );
      }
    }
  }

  public update(timeDiff): void {
    let timeFactor = timeDiff / 17;
    if (this.x + this.scaleFactor * this.width < 0) {
      this.x += this.width * this.scaleFactor;
    } else {
      this.x += this.velocity.x * timeFactor;
    }
  }
}
