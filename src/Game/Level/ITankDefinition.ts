import EItemType from "../Object/Enum/EItemType";
import EDirection from "../../Utils/EDirection";
import { EnemyType } from "../Object/Enum/ETankType";

export default interface ITankDefinition {
	type: EnemyType,
	item?: boolean,
}