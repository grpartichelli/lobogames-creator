import { GameModuleModel } from "./game-category.model";

export class GameModel {
  public static fromOther(other: GameModel): GameModel {
    return new GameModel(
      other.module,
      other.name,
      other.maxPlayerPositionsCount,
      other.videoUrl,
      other.textUrl,
    );
  }

  public constructor(
    public module: GameModuleModel,
    public name: string,
    public maxPlayerPositionsCount: number,
    public videoUrl: string,
    public textUrl: string,
  ) {}
}
