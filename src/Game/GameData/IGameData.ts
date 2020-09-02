import EGameType from "./EGameType"
import ILevel, { ITankGroup } from "../Level/ILevel";
import GameObject from "../Object/GameObject";

export interface IPlayerData {
	life: number,
	score: number,
	destroedTank: ITankGroup
}
export default interface IGameData {
	gameType: EGameType,
	gameOver: boolean,
	playerData: Array<IPlayerData>;
	levelData: ILevel
}