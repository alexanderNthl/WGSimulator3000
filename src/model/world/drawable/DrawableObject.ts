export abstract class DrawableObject {
  /**
   * Draws this on the canvas corresponding to the context
   * @param {CanvasRenderingContext2D} ctx The context to be drawn on
   */
  public abstract draw(ctx: CanvasRenderingContext2D): void;
  /**
   * Updates the properties of this according to the time difference
   * since the last call
   * @param {number} timeDiff time difference between this and last update
   */
  public abstract update(timeDiff: number): void;
}
