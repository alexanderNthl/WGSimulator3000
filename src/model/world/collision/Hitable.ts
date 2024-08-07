import { RectHitBox } from "./RectHitBox";

export interface Hitable {
  getHitBoxes(): RectHitBox[];
}
