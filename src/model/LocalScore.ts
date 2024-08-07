export class Score {
  private score: number;
  private localHighScore: number;
  private isFirstGame: boolean;
  private newHighScoreWasDiscovered: boolean;

  constructor() {
    this.score = 0;
    this.localHighScore = 0;
    this.isFirstGame = true;
    this.newHighScoreWasDiscovered = false;
  }

  public getScore(): number {
    return this.score;
  }

  public getLocalHighScore(): number {
    return this.localHighScore;
  }

  public setScore(score: number) {
    this.score = score;
    if (score > this.localHighScore) {
      this.localHighScore = this.score;
    }
  }

  public newGame() {
    this.score = 0;
    this.newHighScoreWasDiscovered = false;
    if (this.localHighScore > 0) {
      this.isFirstGame = false;
    }
  }

  // Only true at max once per game
  public hasNewLocalHighscore(): boolean {
    if (
      !this.newHighScoreWasDiscovered &&
      !this.isFirstGame &&
      this.localHighScore === this.score
    ) {
      this.newHighScoreWasDiscovered = true;
      return true;
    }
    return false;
  }
}
