import { AssetRepository } from "../../../assets/AssetRepository";
import { velocity } from "../../../util/models";
import { DrawableObject } from "./DrawableObject";

export class RewardExplosion extends DrawableObject {
  private MAX_VEL = 2.5;
  private VEL_DAMP = 0.98;
  private TIME_TIL_VANISH = 500;

  private x: number;
  private y: number;

  private alpha: number;

  private particleImage: HTMLImageElement;
  private particles: Particle[] = [];

  constructor(x, y, assetRepository: AssetRepository) {
    super();
    this.x = x;
    this.y = y;
    this.alpha = 1;

    for (let i = 0; i < 6; i++) {
      let dir = this.getRandDir();
      let xVel = Math.sin(dir) * this.MAX_VEL * (1 + Math.random() * 0.5);
      let yVel = Math.cos(dir) * this.MAX_VEL * (1 + Math.random() * 0.5);
      let velocity = { x: xVel, y: yVel };
      this.particles.push(new Particle(this.x, this.y, velocity));
    }

    this.particleImage = assetRepository.getImage("reward-star");
  }

  private getRandDir() {
    return Math.random() * 2 * Math.PI;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    this.particles.forEach((particle) => {
      ctx.save();
      // ctx.translate(particle.x + 15, particle.y + 13);
      // ctx.rotate(particle.rotation);
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(this.particleImage, particle.x, particle.y, 30, 27);
      ctx.restore();
    });
  }

  public update(timeDiff): void {
    let timeFactor = timeDiff / 17;

    this.particles.forEach((particle) => {
      particle.x += particle.vel.x * timeFactor;
      particle.y += particle.vel.y * timeFactor;
      particle.vel.x *= this.VEL_DAMP;
      particle.vel.y *= this.VEL_DAMP;
      particle.rotation += particle.rotationConst;
    });

    this.alpha -= timeDiff / this.TIME_TIL_VANISH;
  }
}

class Particle {
  x: number;
  y: number;
  vel: velocity;
  rotation: number;
  rotationConst: number;

  constructor(x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.rotation = 0;
    this.rotationConst = Math.random() * Math.PI - 0.1;
  }
}
