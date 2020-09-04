import ITankDefinition from "./ITankDefinition";
import IBlockDefinition from "./IBlockDefinition";

export interface ITankGroup {
	DEFAULT: number,
	SPEED: number,
	POWER: number,
	ARMOURED: number,
}

export function getTotalOfTankGroup(group: ITankGroup) {
	if (isNaN(group.DEFAULT)) {
		group.DEFAULT = 0;
	}
	if (isNaN(group.SPEED)) {
		group.SPEED = 0;
	}
	if (isNaN(group.POWER)) {
		group.POWER = 0;
	}
	if (isNaN(group.ARMOURED)) {
		group.ARMOURED = 0;
	}

	return group.DEFAULT + group.SPEED + group.POWER + group.ARMOURED;
}

export default interface ILevel {
	levelId: string | number,
	levelName: string,
	tanks: Array<ITankGroup>,
	blocks: Array<IBlockDefinition>
}