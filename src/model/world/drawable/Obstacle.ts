import { DrawableObject } from "./DrawableObject";
import { DrawableObjectTemplate } from "./DrawableObjectTemplate";
import { RectHitBox } from "../collision/RectHitBox";
import { Hitable } from "../collision/Hitable";

import { velocity } from "../../../util/models";
import { Config } from "../../../Config";

export class Obstacle extends DrawableObject implements Hitable {
  private CONFIG: Config;

  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private velocity: velocity;

  private img: HTMLImageElement;
  private dropsShadow: boolean;

  private hitBoxes: RectHitBox[] = [];

  constructor(
    CONFIG: Config,
    x,
    y,
    w,
    h,
    v,
    template: DrawableObjectTemplate,
    scale = 1,
    shadow = true
  ) {
    super();
    this.CONFIG = CONFIG;

    this.x = x;
    this.y = y;
    this.velocity = v;

    this.img = template.image;
    this.dropsShadow = shadow;

    this.width = template.dimensions.w;
    this.height = template.dimensions.h;
    for (let hitBox of template.hitBoxes) {
      this.hitBoxes.push(
        new RectHitBox(
          this.x + hitBox.xOff,
          this.y + hitBox.yOff,
          hitBox.w,
          hitBox.h
        )
      );
    }
  }

  getX() {
    return this.x;
  }

  getWidth() {
    return this.width;
  }

  getHitBoxes() {
    return this.hitBoxes;
  }

  setVelocity(velocity: velocity) {
    this.velocity = velocity;
  }

  public draw(ctx): void {
    if (this.img == undefined) {
      ctx.fillStyle = "lightgreen";
      ctx.fillRect(this.x, this.y - this.height, this.width, this.height);
    } else {
      if (this.CONFIG.SETTINGS.debugIsEnabled) {
        ctx.fillStyle = "green";
        this.hitBoxes.forEach((hitBox) =>
          ctx.fillRect(
            hitBox.getX(),
            hitBox.getY(),
            hitBox.getWidth(),
            hitBox.getHeight()
          )
        );
      }

      if (this.img) {
        ctx.save();
        if (this.dropsShadow) {
          ctx.shadowColor = "black";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 4;
          ctx.shadowOffsetY = 0;
        }

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.restore();
      }
    }
  }

  public update(timeDiff): void {
    let timeFactor = timeDiff / 17;
    this.x += this.velocity.x * timeFactor;
    this.y += this.velocity.y * timeFactor;
    this.hitBoxes.forEach(
      (hitBox) => (hitBox.x += this.velocity.x * timeFactor)
    );
    this.hitBoxes.forEach(
      (hitBox) => (hitBox.y += this.velocity.y * timeFactor)
    );
  }
}
