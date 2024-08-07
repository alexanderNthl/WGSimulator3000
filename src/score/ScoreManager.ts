import { Config } from "../Config";
import { Score } from "./Score";
import { ScoreManagerDAO } from "./ScoreManagerDAO";

export class ScoreManager {
  private readonly apiEndpoint: string;

  private scores: Score[];
  private currentPlayerScoreIds: number[];

  constructor(CONFIG: Config) {
    this.apiEndpoint = CONFIG.SETTINGS.isDevMode ? CONFIG.API_PATHS.HOST : "";
    this.apiEndpoint = this.apiEndpoint.concat(CONFIG.API_PATHS.SCORES);

    this.currentPlayerScoreIds = [];
    this.scores = [];
  }

  public async getScoreManagerDAO(): Promise<ScoreManagerDAO> {
    return new Promise((resolve, reject) => {
      this.fetchAllScores()
        .then(() => {
          resolve({
            scores: this.scores,
            currentPlayerScoreIds: this.currentPlayerScoreIds,
          });
        })
        .catch(() => {
          reject(null);
        });
    });
  }

  public async uploadScore(score: number, alias: string): Promise<void> {
    if (this.currentPlayerScoreIds.length > 0) {
      return this.putScore(this.currentPlayerScoreIds[0], Math.round(score));
    } else {
      return this.postScore(Math.round(score), alias);
    }
  }

  private async postScore(score: number, alias: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fetch(this.apiEndpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ playerAlias: alias, score: score }),
      })
        .then((res) => res.json())

        .then((body) => {
          this.currentPlayerScoreIds.push(body.id);
          resolve();
        })
        .catch((res) => {
          console.log(`Unable to post score: ${res}`);
          reject();
        });
    });
  }

  private async putScore(id: number, score: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const putScoreEndpoint = this.apiEndpoint + "/" + id;
      fetch(putScoreEndpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ score: score }),
      })
        .then((res) => res.json())

        .then((body) => {
          resolve();
        })
        .catch((res) => {
          console.log(`Unable to update score: ${res}`);
          reject();
        });
    });
  }

  private async fetchAllScores(): Promise<void> {
    return new Promise((resolve, reject) => {
      fetch(this.apiEndpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((body) => {
          this.scores = [];
          body.forEach((score) =>
            this.scores.push({
              id: score.id,
              playerAlias: score.player_alias,
              score: score.score,
              date: new Date(score.date_scored),
            })
          );
          resolve();
        })
        .catch((res) => {
          console.log(`Unable to fetch scores: ${res}`);
          reject();
        });
    });
  }
}
