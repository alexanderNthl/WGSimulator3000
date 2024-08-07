import { GameStates } from "./GameStates";

export class GameStateDAO {
  // public readonly characterId: string;
  public readonly currentScore: number;
  public readonly localHighscore: number;
  public readonly state: GameStates;
  public readonly characterId: string;

  constructor(
    // characterId: string,
    currentScore: number,
    localHighscore: number,
    state: GameStates,
    characterId: string
  ) {
    // this.characterId = characterId;
    this.currentScore = currentScore;
    this.localHighscore = localHighscore;
    this.state = state;
    this.characterId = characterId;
  }
}
