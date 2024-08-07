import { Score } from "./Score";

export type ScoreManagerDAO = {
  scores: Score[];
  currentPlayerScoreIds: number[];
};
