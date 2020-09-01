import ITankDefinition from "./ITankDefinition";
import IBlockDefinition from "./IBlockDefinition";

export default interface ILevel {
	levelId: string | number,
	levelName: string,
	tanks: Array<ITankDefinition>,
	blocks: Array<IBlockDefinition>
}