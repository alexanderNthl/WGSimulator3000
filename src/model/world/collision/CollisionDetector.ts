import { Hitable } from "./Hitable";

export class CollisionDetector {
  public static collided(objectA: Hitable, objectB: Hitable): boolean {
    if (objectA == undefined || objectB == undefined) {
      return false;
    }

    let aHitBoxes = objectA.getHitBoxes();
    let bHitBoxes = objectB.getHitBoxes();

    for (let aHitBox of aHitBoxes) {
      for (let bHitBox of bHitBoxes) {
        if (bHitBox.collidesWith(aHitBox)) {
          return true;
        }
      }
    }
    return false;
  }
}
