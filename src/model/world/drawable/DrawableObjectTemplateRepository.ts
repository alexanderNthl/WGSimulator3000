import { Config } from "../../../Config";
import { DrawableObjectTemplate } from "./DrawableObjectTemplate";
import { PlayerTemplate } from "./PlayerTemplate";

export class DrawableObjectTemplateRepository {
  private backgroundTemplates: Map<string, DrawableObjectTemplate>;
  private obstacleTemplates: Map<string, DrawableObjectTemplate>;
  private collectableTemplates: Map<string, DrawableObjectTemplate>;
  private playerTemplates: Map<string, PlayerTemplate>;

  constructor(config: Config) {
    this.backgroundTemplates = new Map();
    this.obstacleTemplates = new Map();
    this.collectableTemplates = new Map();
    this.playerTemplates = new Map();

    config.BACKGROUND_TEMPLATES.forEach((template) =>
      this.backgroundTemplates.set(template.id, template)
    );
    config.OBSTACLES_GRND_TEMPLATES.forEach((template) =>
      this.obstacleTemplates.set(template.id, template)
    );
    config.COLLECTABLES_TEMPLATES.forEach((template) =>
      this.collectableTemplates.set(template.id, template)
    );
    config.PLAYER_TEMPLATES.forEach((template) =>
      this.playerTemplates.set(template.id, template)
    );
  }

  public getBackgroundTemplates(): Array<DrawableObjectTemplate> {
    return Array.from(this.backgroundTemplates.values());
  }

  public getObstacleTemplates(): Array<DrawableObjectTemplate> {
    return Array.from(this.obstacleTemplates.values());
  }

  public getCollectableTemplates(): Array<DrawableObjectTemplate> {
    return Array.from(this.collectableTemplates.values());
  }

  public getPlayerTemplates(): Array<PlayerTemplate> {
    return Array.from(this.playerTemplates.values());
  }

  public getBackgroundTemplate(id: string): DrawableObjectTemplate {
    return this.backgroundTemplates.get(id);
  }

  public getObstacleTemplate(id: string): DrawableObjectTemplate {
    return this.obstacleTemplates.get(id);
  }

  public getCollectableTemplate(id: string): DrawableObjectTemplate {
    return this.collectableTemplates.get(id);
  }

  public getPlayerTemplate(id: string): PlayerTemplate {
    return this.playerTemplates.get(id);
  }
}
