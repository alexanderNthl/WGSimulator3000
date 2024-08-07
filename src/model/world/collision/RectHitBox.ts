export class RectHitBox {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  collidesWith(hitBox: RectHitBox) {
    let collided =
      this.x + this.width > hitBox.getX() &&
      this.x < hitBox.getX() + hitBox.getWidth() &&
      this.y + this.height > hitBox.getY() &&
      this.y < hitBox.getY() + hitBox.getHeight();
    // if (collided == true) {
    //   console.log("COLLISION");
    // }
    return collided;
  }
}

export type hitBoxTemplate = {
  xOff: number;
  yOff: number;
  w: number;
  h: number;
};
