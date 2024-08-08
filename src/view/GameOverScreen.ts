import { AssetRepository } from "../assets/AssetRepository";
import { AudioPlayer } from "../audio/AudioPlayer";
import { Config } from "../Config";
import { Controller } from "../Contoller";
import { GameStateDAO } from "../model/GameStateDAO";
import { GetPlayerAliasDialog } from "./components/GetPlayerAliasDialog";
import { ScoreTable } from "./components/ScoreTable";
import { SelectPlayerDialog } from "./components/SelectPlayerDialog";

export class GameOverScreen {
  // Strings
  private STR_NEW_HIGHSCORE = "New Highscore!";
  private STR_SCORE = "Score";

  private BACKGROUND_IMAGE_PATH = "/assets/uploads/design_game_over_bg.svg";

  private CONFIG: Config;

  private controller: Controller;
  private audioPlayer: AudioPlayer;
  private assetRepository: AssetRepository;
  private scoreTableComponent: ScoreTable;
  private getPlayerAliasDialog: GetPlayerAliasDialog;
  private selectPlayerDialog: SelectPlayerDialog;

  // Deal with concurrency. Table must not be updated concurrently.
  private lockTableUpdate: boolean;
  private tableUpdateRequested: boolean;

  private scoreFormatter: Intl.NumberFormat;
  private tableTriggerCount = 0;

  private container: HTMLElement;
  private panel: HTMLElement;

  private restartButton: HTMLButtonElement;
  private quitButton: HTMLButtonElement;
  private scoreText: HTMLElement;
  private scoreValue: HTMLElement;
  private characterSelector: HTMLButtonElement;

  private scrollContainer: HTMLElement;
  private pageOneIndicator: HTMLElement;
  private pageTwoIndicator: HTMLElement;

  constructor(
    CONFIG: Config,
    controller: Controller,
    audioPlayer: AudioPlayer,
    assetRespository: AssetRepository
  ) {
    this.CONFIG = CONFIG;

    this.controller = controller;
    this.audioPlayer = audioPlayer;
    this.assetRepository = assetRespository;

    this.scoreTableComponent = new ScoreTable(
      CONFIG,
      this,
      audioPlayer,
      assetRespository
    );
    this.getPlayerAliasDialog = new GetPlayerAliasDialog(CONFIG, audioPlayer);
    this.selectPlayerDialog = new SelectPlayerDialog(
      CONFIG,
      audioPlayer,
      assetRespository
    );

    this.lockTableUpdate = false;
    this.tableUpdateRequested = false;
    this.scoreFormatter = new Intl.NumberFormat("de-DE");

    this.container = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.CONTAINER
    );
    this.panel = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.PANEL
    );
    this.restartButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.RESTART_BUTTON
    ) as HTMLButtonElement;
    this.quitButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.QUIT_BUTTON
    ) as HTMLButtonElement;
    this.scoreText = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.SCORE_TEXT
    );
    this.scoreValue = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.SCORE_VALUE
    );
    this.characterSelector = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.CHARACTER_SELECTOR
    ) as HTMLButtonElement;

    this.scrollContainer = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.SCROLL_CONTAINER
    ) as HTMLElement;
    this.pageOneIndicator = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.PAGE_ONE_INDICATOR
    ) as HTMLElement;
    this.pageTwoIndicator = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.PAGE_TWO_INDICATOR
    ) as HTMLElement;

    this.setupElement();
  }

  public show() {
    this.update(this.controller.getGameStateDAO());
    this.container.style.display = "block";
    // this.triggerScoreTableUpdate();
  }

  public hide() {
    this.container.style.display = "none";
  }

  // We do not control concurrency here, we trust the controller
  public async getPlayerAlias(): Promise<string> {
    return this.getPlayerAliasDialog.getPlayerAlias();
  }

  public async triggerScoreTableUpdate() {
    // Still unsafe, but better
    if (this.lockTableUpdate) {
      if (this.CONFIG.SETTINGS.debugIsEnabled) {
        console.log("Table update is locked, trigger queue...");
      }
      this.tableUpdateRequested = true;
      return;
    }
    this.lockTableUpdate = true;

    if (this.CONFIG.SETTINGS.debugIsEnabled) {
      this.tableTriggerCount++;
      console.log(
        `Locking table update. Trigger counter: ${this.tableTriggerCount}`
      );
    }

    this.scoreTableComponent.showLoading();

    this.controller
      .getScoreManagerDAO()
      .then((scoreManagerDAO) => {
        this.scoreTableComponent.createScoreTable(scoreManagerDAO);
        this.scoreTableComponent.showTable();
      })
      .catch((err) => {
        this.scoreTableComponent.showError();
      })
      .finally(() => {
        if (this.CONFIG.SETTINGS.debugIsEnabled) {
          console.log("Release table lock...");
        }

        this.lockTableUpdate = false;

        if (this.tableUpdateRequested) {
          if (this.CONFIG.SETTINGS.debugIsEnabled) {
            console.log("Retrigger table update");
          }

          this.tableUpdateRequested = false;
          this.triggerScoreTableUpdate();
        }
      });
  }

  public notifyAssetsLoaded() {
    this.selectPlayerDialog.setupCarousel();
  }

  private update(gameStateDAO: GameStateDAO) {
    const currentCharacter = this.CONFIG.PLAYER_TEMPLATES.find(
      (el) => el.id === gameStateDAO.characterId
    );
    this.characterSelector.innerText = currentCharacter.displayName;
    this.selectPlayerDialog.setPlayerIndex(
      this.CONFIG.PLAYER_TEMPLATES.indexOf(currentCharacter)
    );

    this.scoreText.innerHTML =
      gameStateDAO.currentScore < gameStateDAO.localHighscore
        ? this.STR_SCORE
        : this.STR_NEW_HIGHSCORE;
    this.scoreValue.innerHTML = String(
      this.scoreFormatter.format(Math.round(gameStateDAO.currentScore))
    );
  }

  private setupElement() {
    this.panel.style.backgroundImage = `url(${this.BACKGROUND_IMAGE_PATH})`;

    this.restartButton.addEventListener(
      "click",
      this.controller.restartGame.bind(this.controller)
    );
    this.characterSelector.addEventListener("click", (event) => {
      this.selectPlayerDialog.show().then((playerIndex) => {
        this.characterSelector.innerText =
          this.CONFIG.PLAYER_TEMPLATES[playerIndex].displayName;
        this.controller.setCharacter(
          this.CONFIG.PLAYER_TEMPLATES[this.selectPlayerDialog.getPlayerIndex()]
            .id
        );
      });
    });

    this.restartButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.quitButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.characterSelector.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );

    this.pageOneIndicator.style.backgroundColor = "#33135c";
    this.pageTwoIndicator.style.backgroundColor = "#bfbfbf";
    this.scrollContainer.addEventListener("scroll", () =>
      this.handleScrollEvent()
    );
  }

  private handleScrollEvent() {
    if (
      this.scrollContainer.scrollLeft <
      this.scrollContainer.offsetWidth / 2
    ) {
      this.pageOneIndicator.style.backgroundColor = "#33135c";
      this.pageTwoIndicator.style.backgroundColor = "#bfbfbf";
    } else {
      this.pageOneIndicator.style.backgroundColor = "#bfbfbf";
      this.pageTwoIndicator.style.backgroundColor = "#33135c";
    }
  }
}
