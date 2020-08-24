import GameObject from "../Object/GameObject";

export default interface ILevel {
	levelId: string,
	levelName: string,
	levelObjects: Array<Array<GameObject>>
}