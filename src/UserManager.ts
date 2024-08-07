export class UserManager {
  private playerAlias: string;
  private isWaitingForAlias: boolean;

  constructor() {
    this.playerAlias = null;
    this.isWaitingForAlias = true;
  }

  public setPlayerAlias(alias: string) {
    this.playerAlias = alias;
  }

  public getPlayerAlias(): string {
    return this.playerAlias;
  }

  public setWaitingForAlias(waiting: boolean) {
    this.isWaitingForAlias = waiting;
  }

  public getIsWaitingForAlias(): boolean {
    return this.isWaitingForAlias;
  }
}
