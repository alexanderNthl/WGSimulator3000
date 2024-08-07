import { Config } from "../../Config";
import { AudioPlayer } from "../../audio/AudioPlayer";

export class GetPlayerAliasDialog {
  private CONFIG: Config;

  private audioPlayer: AudioPlayer;

  private playerAliasContainer: HTMLElement;
  private playerAliasInput: HTMLInputElement;
  private playerAliasSubmitButton: HTMLButtonElement;
  private playerAliasSkipButton: HTMLButtonElement;

  constructor(CONFIG: Config, audioPlayer: AudioPlayer) {
    this.CONFIG = CONFIG;

    this.audioPlayer = audioPlayer;

    this.playerAliasContainer = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS.CONTAINER
    ) as HTMLElement;
    this.playerAliasInput = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS.INPUT
    ) as HTMLInputElement;
    this.playerAliasSubmitButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS
        .SUBMIT_BUTTON
    ) as HTMLButtonElement;
    this.playerAliasSkipButton = document.getElementById(
      this.CONFIG.HTML_ELEMENT_IDS.GAME_OVER_SCREEN.GROUP_PLAYER_ALIAS
        .SKIP_BUTTON
    ) as HTMLButtonElement;

    this.setupElement();
  }

  public async getPlayerAlias(): Promise<string> {
    this.playerAliasContainer.style.display = "grid";

    return new Promise((resolve, reject) => {
      this.playerAliasSubmitButton.addEventListener("click", () => {
        this.playerAliasContainer.style.display = "none";
        const playerAlias = this.playerAliasInput.value;
        playerAlias === "" ? resolve(null) : resolve(playerAlias);
      });
      this.playerAliasSkipButton.addEventListener("click", () => {
        this.playerAliasContainer.style.display = "none";
        resolve(null);
      });
    });
  }

  private setupElement() {
    this.playerAliasSkipButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
    this.playerAliasSubmitButton.addEventListener("click", () =>
      this.audioPlayer.playSound("button")
    );
  }
}
