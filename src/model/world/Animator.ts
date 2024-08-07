import { DrawableObject } from "./drawable/DrawableObject";
/**
 * Responsible for refreshing all DrawableObjects that observe the
 * Animator.
 * Implements observable pattern.
 */
export class Animator {
  private observers: DrawableObject[] = [];

  public subscribe(observer: DrawableObject): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: DrawableObject): boolean {
    let index = this.observers.indexOf(observer);
    if (index == -1) {
      return false;
    }
    this.observers.splice(index, 1);
    return true;
  }

  public unsubscribeAll() {
    this.observers = [];
  }

  public update(timeDiff: number) {
    this.observers.forEach((observer) => observer.update(timeDiff));
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.observers.forEach((observer) => observer.draw(ctx));
  }
}
