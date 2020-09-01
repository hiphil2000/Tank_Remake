import { Point } from "../../Utils/UnitTypes";
import EBlockType from "../Object/Enum/EBlockType";
import { BlockState2x2 } from "../Object/BlockObject";

export default interface IBlockDefinition {
	type: EBlockType,
	position: Point,
	blockState: BlockState2x2
}