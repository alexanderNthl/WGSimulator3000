import { Controller } from "./Contoller";

/**
 * Is entry point to the game
 */
export class WgSimulatorMain {
  private controller: Controller;

  constructor() {
    this.controller = new Controller();
  }

  public setCharacter(id: string) {
    this.controller.setCharacter(id);
  }
}
