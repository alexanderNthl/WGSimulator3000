import {
  DrawableObjectTemplate,
  scaleDrawableTempalte,
} from "./DrawableObjectTemplate";

// TODO only one hitbox for all frames
export type PlayerTemplate = DrawableObjectTemplate & {
  displayName: string;
  frames: number;
  frameWidth: number;
  canJump: boolean;
  running: stateFrameDescription;
  jumping: stateFrameDescription;
  crashed: stateFrameDescription;
};

export type stateFrameDescription = {
  startFrame: number;
  endFrame: number;
  msPerFrame: number;
};

export function scalePlayerTemplate(
  template: PlayerTemplate,
  factor: number
): PlayerTemplate {
  let scaledTemplate = scaleDrawableTempalte(template, factor);
  return {
    id: scaledTemplate.id,
    dimensions: scaledTemplate.dimensions,
    imagePath: scaledTemplate.imagePath,
    image: scaledTemplate.image,
    hitBoxes: scaledTemplate.hitBoxes,
    displayName: template.displayName,
    frames: template.frames,
    frameWidth: template.frameWidth,
    canJump: template.canJump,
    running: template.running,
    jumping: template.jumping,
    crashed: template.crashed,
  };
}
