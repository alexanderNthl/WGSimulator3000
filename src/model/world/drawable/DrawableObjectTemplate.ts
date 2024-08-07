import { dimension } from "../../../util/models";
import { hitBoxTemplate } from "../collision/RectHitBox";

export type DrawableObjectTemplate = {
  id: string;
  dimensions: dimension;
  imagePath: string;
  image?: HTMLImageElement;
  hitBoxes?: hitBoxTemplate[];
};

export function scaleDrawableTempalte(
  tmplt: DrawableObjectTemplate,
  factor: number
): DrawableObjectTemplate {
  let scaledDimensions = {
    w: tmplt.dimensions.w * factor,
    h: tmplt.dimensions.h * factor,
  };
  let scaledHitBoxes: hitBoxTemplate[] = [];
  for (let hitBox of tmplt.hitBoxes) {
    scaledHitBoxes.push({
      xOff: hitBox.xOff,
      yOff: hitBox.yOff,
      w: hitBox.w,
      h: hitBox.h,
    });
  }
  scaledHitBoxes.forEach((hitBox) => {
    hitBox.xOff *= factor;
    hitBox.yOff *= factor;
    hitBox.h *= factor;
    hitBox.w *= factor;
  });
  return {
    id: tmplt.id,
    dimensions: scaledDimensions,
    imagePath: tmplt.imagePath,
    image: tmplt.image,
    hitBoxes: scaledHitBoxes,
  };
}
