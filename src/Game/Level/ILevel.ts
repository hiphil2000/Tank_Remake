import Object from "../Object/Object";

export default interface ILevel {
	levelId: string,
	levelName: string,
	levelObjects: Array<Array<Object>>
}