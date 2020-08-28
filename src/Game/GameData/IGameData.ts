import EGameType from "./EGameType"
import ILevel from "../Level/ILevel";
import GameObject from "../Object/GameObject";

export default interface IGameData {
	gameType: EGameType,
	life: number,
	objects: Array<GameObject>,
	levelData: ILevel
}