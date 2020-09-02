import ITankDefinition from "./ITankDefinition";
import IBlockDefinition from "./IBlockDefinition";

export interface ITankGroup {
	DEFAULT: number,
	SPEED: number,
	POWER: number,
	ARMOURED: number,
}
export default interface ILevel {
	levelId: string | number,
	levelName: string,
	tanks: Array<ITankGroup>,
	blocks: Array<IBlockDefinition>
}