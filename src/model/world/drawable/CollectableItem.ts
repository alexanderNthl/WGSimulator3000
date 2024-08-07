import { DrawableObject } from "./DrawableObject";
import { DrawableObjectTemplate } from "./DrawableObjectTemplate";
import { RectHitBox } from "../collision/RectHitBox";
import { velocity } from "../../../util/models";
import { Hitable } from "../collision/Hitable";
import { Config } from "../../../Config";

export class CollectableItem extends DrawableObject implements Hitable {
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

  getY() {
    return this.y;
  }

  getHitBoxes() {
    return this.hitBoxes;
  }

  setVelocity(velocity: velocity) {
    this.velocity = velocity;
  }

  public draw(ctx): void {
    if (this.img == undefined) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI, false);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.stroke();
    } else {
      if (this.CONFIG.SETTINGS.debugIsEnabled) {
        ctx.fillStyle = "violet";
        ctx.fillRect(
          this.hitBoxes[0].getX(),
          this.hitBoxes[0].getY(),
          this.hitBoxes[0].getWidth(),
          this.hitBoxes[0].getHeight()
        );
      }

      if (this.img) {
        ctx.save();
        if (this.dropsShadow) {
          ctx.shadowColor = "black";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 4;
          ctx.shadowOffsetY = 6;
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
