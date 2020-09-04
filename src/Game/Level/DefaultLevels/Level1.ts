import ILevel from "../ILevel";
import EBlockType from "../../Object/Enum/EBlockType";
import { BLOCK_FULL, BLOCK_HALF_HT, BLOCK_HALF_HB, BLOCK_HALF_VR, BLOCK_HALF_VL } from "./LevelUtils";

const Level1: ILevel = {
	levelId: 1,
	levelName: 'LEVEL 1',
	blocks: [
		{
			position: {x: 1, y: 1},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 1},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 1},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 7, y: 1},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 9, y: 1},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 1},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 1, y: 2},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 2},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 2},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 7, y: 2},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 9, y: 2},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 2},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 1, y: 3},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 3},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 3},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 6, y: 3},
			type: EBlockType.IRON,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 7, y: 3},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 9, y: 3},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 3},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 1, y: 4},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 4},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 4},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 7, y: 4},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 9, y: 4},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 4},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 1, y: 5},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 3, y: 5},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 5, y: 5},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 7, y: 5},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 9, y: 5},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 11, y: 5},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 0, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 2, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 3, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 5, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 7, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 9, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 10, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 12, y: 6},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 0, y: 7},
			type: EBlockType.IRON,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 2, y: 7},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 3, y: 7},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 5, y: 7},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 7, y: 7},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 9, y: 7},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 10, y: 7},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 12, y: 7},
			type: EBlockType.IRON,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 1, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 3, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 5, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 6, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 7, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 9, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 11, y: 8},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 1, y: 9},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 9},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 9},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 7, y: 9},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 9, y: 9},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 9},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 1, y: 10},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 10},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 10},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 7, y: 10},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HT,
		},
		{
			position: {x: 9, y: 10},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 10},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 1, y: 11},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 3, y: 11},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 11},
			type: EBlockType.BRICK,
			blockState: {
				bottomLeft: false,
				bottomRight: true,
				topLeft: false,
				topRight: false
			},
		},
		{
			position: {x: 6, y: 11},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_HB,
		},
		{
			position: {x: 7, y: 11},
			type: EBlockType.BRICK,
			blockState: {
				bottomLeft: true,
				bottomRight: false,
				topLeft: false,
				topRight: false
			},
		},
		{
			position: {x: 9, y: 11},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 11, y: 11},
			type: EBlockType.BRICK,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 5, y: 12},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_VR,
		},
		{
			position: {x: 6, y: 12},
			type: EBlockType.EAGLE,
			blockState: BLOCK_FULL,
		},
		{
			position: {x: 7, y: 12},
			type: EBlockType.BRICK,
			blockState: BLOCK_HALF_VL,
		},
	],
	tanks: [
		{
			ARMOURED: 0,
			DEFAULT: 18,
			SPEED: 0,
			POWER: 0
		},
		{
			ARMOURED: 0,
			DEFAULT: 0,
			SPEED: 2,
			POWER: 0
		}
	]
}

export default Level1;