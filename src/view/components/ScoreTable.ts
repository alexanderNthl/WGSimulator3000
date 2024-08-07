import { AssetRepository } from "../../assets/AssetRepository";
import { AudioPlayer } from "../../audio/AudioPlayer";
import { Config } from "../../Config";
import { Score } from "../../score/Score";
import { ScoreManagerDAO } from "../../score/ScoreManagerDAO";
import { GameOverScreen } from "../GameOverScreen";

export class ScoreTable {
  private CONFIG: Config;

  private gameOverScreen: GameOverScreen;
  private audioPlayer: AudioPlayer;
  private assetRepository: AssetRepository;

  private tableRowsByScore: Map<Score, HTMLTableRowElement>;
  private scoreFormatter: Intl.NumberFormat;

  private scoresTable: HTMLTableElement;
  private scoresContainer: HTMLElement;
  private filterScoresTableSelector: HTMLSelectElement;
  private loadingScoresContainer: HTMLElement;
  private errorLoadingScoresContainer: HTMLElement;
  private retryLoadScoresButton: HTMLButtonElement;

  constructor(
    CONFIG: Config,
    gameOverScreen: GameOverScreen,
    audioPlayer: AudioPlayer,
    assetRespository: AssetRepository
  ) {
    this.CONFIG = CONFIG;

    this.gameOverScreen = gameOverScreen;
    this.audioPlayer = audioPlayer;
    this.assetRepository = assetRespository;

    this.tableRowsByScore = new Map();
    this.scoreFormatter = new Intl.NumberFormat("de-DE");

    this.scoresTable = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE.TABLE
    ) as HTMLTableElement;
    this.scoresContainer = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE.CONTAINER
    ) as HTMLElement;
    this.filterScoresTableSelector = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
        .FILTER_SCORES_SELECTOR
    ) as HTMLSelectElement;
    this.loadingScoresContainer = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
        .LOADING_SCORES_CONTAINER
    ) as HTMLElement;
    this.errorLoadingScoresContainer = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
        .ERROR_SCORES_CONTAINER
    ) as HTMLElement;
    this.retryLoadScoresButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_SCORE_TABLE
        .RETRY_LOAD_SCORES_BUTTON
    ) as HTMLButtonElement;

    this.setupElement();
  }

  public showTable() {
    this.loadingScoresContainer.style.display = "none";
    this.errorLoadingScoresContainer.style.display = "none";
    this.scoresContainer.style.display = "flex";
  }

  public showLoading() {
    this.scoresContainer.style.display = "none";
    this.errorLoadingScoresContainer.style.display = "none";
    this.loadingScoresContainer.style.display = "flex";
  }

  public showError() {
    this.scoresContainer.style.display = "none";
    this.loadingScoresContainer.style.display = "none";
    this.errorLoadingScoresContainer.style.display = "flex";
  }

  public createScoreTable(scoreManagerDAO: ScoreManagerDAO) {
    this.scoresTable.innerHTML = "";

    this.tableRowsByScore = new Map();

    const scores = [...scoreManagerDAO.scores].sort(
      (a, b) => b.score - a.score
    );

    let scrollToRow: HTMLTableRowElement = null;

    scores.forEach((score) => {
      const row = this.scoresTable.insertRow(-1);

      const nrCell = row.insertCell(0);
      const aliasCell = row.insertCell(1);
      const scoreCell = row.insertCell(2);

      if (row.rowIndex > 3) {
        nrCell.innerText = String(row.rowIndex);
      } else {
        row.style.fontWeight = "bold";
        nrCell.style.padding = "0rem";
        nrCell.style.display = "revert";
        const medal = nrCell.appendChild(new Image());
        medal.style.display = "inline-block";
        if (row.rowIndex === 1) {
          medal.src = this.assetRepository.getImage("medalFirst").src;
        } else if (row.rowIndex === 2) {
          medal.src = this.assetRepository.getImage("medalSecond").src;
        } else if (row.rowIndex === 3) {
          medal.src = this.assetRepository.getImage("medalThird").src;
        }
      }
      aliasCell.innerText = score.playerAlias;
      scoreCell.innerText = this.scoreFormatter.format(score.score);

      if (scoreManagerDAO.currentPlayerScoreIds.indexOf(score.id) != -1) {
        row.style.color = "#de38c8";
        row.style.fontWeight = "bold";
        scrollToRow = scrollToRow === null ? row : scrollToRow;
      }

      this.tableRowsByScore.set(score, row);
    });

    // Does not work here because table.style.display is none
    // if (scrollToRow !== null) {
    //   console.log(
    //     this.scoresTable.offsetHeight *
    //       (scrollToRow.rowIndex / this.scoresTable.rows.length)
    //   );
    //   this.scoresTable.scrollTo({
    //     top:
    //       this.scoresTable.offsetHeight *
    //       (scrollToRow.rowIndex / this.scoresTable.rows.length),
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }
  }

  private filterScoreTable(value: string) {
    const DAYS_PER_WEEK = 7;
    const DAYS_PER_MONTH = 30;

    let maximalDayDifference;
    if (value === "MONTH") {
      maximalDayDifference = DAYS_PER_MONTH;
    } else if (value === "WEEK") {
      maximalDayDifference = DAYS_PER_WEEK;
    } else {
      maximalDayDifference = Infinity;
    }

    this.tableRowsByScore.forEach((row, score, map) => {
      const dayDifference = Math.round(
        Math.abs(Date.now() - score.date.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (dayDifference > maximalDayDifference) {
        row.style.display = "none";
      } else {
        row.style.display = "table-row";
      }
    });
  }

  private setupElement() {
    this.retryLoadScoresButton.addEventListener("click", () =>
      this.gameOverScreen.triggerScoreTableUpdate()
    );
    this.retryLoadScoresButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.filterScoresTableSelector.addEventListener("change", (event) => {
      this.filterScoreTable((event.target as HTMLOptionElement).value);
    });
  }
}
