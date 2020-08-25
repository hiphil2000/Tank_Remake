import EGameType from "./EGameType"
import ILevel from "../Level/ILevel";
import Object from "../Object/Object";

export default interface IGameData {
	gameType: EGameType,
	objects: Array<Object>,
	levelData: ILevel
}