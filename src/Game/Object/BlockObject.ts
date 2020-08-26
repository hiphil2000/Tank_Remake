import GameObject from "./GameObject"
import EObjectType from "./EObjectType";
import { Guid } from "../../Utils/Utils";
import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import BulletObject from "./BulletObject";
import EDirection from "../../Utils/EDirection";

export type BlockRow = [boolean, boolean, boolean, boolean];
export type BlockState4x4 = [BlockRow, BlockRow, BlockRow, BlockRow];
export interface BlockState2x2 {
	topLeft: boolean,
	topRight: boolean,
	bottomLeft: boolean,
	bottomRight: boolean
}

export function BlockState2x2To4x4(x2: BlockState2x2): BlockState4x4 {
	let x4: BlockState4x4 = [
		[false, false, false, false],
		[false, false, false, false],
		[false, false, false, false],
		[false, false, false, false]
	];
	x4[0][0] = x2.topLeft;
	x4[0][1] = x2.topLeft;
	x4[1][0] = x2.topLeft;
	x4[1][1] = x2.topLeft;
	x4[0][2] = x2.topRight;
	x4[0][3] = x2.topRight;
	x4[1][2] = x2.topRight;
	x4[1][3] = x2.topRight;
	x4[2][0] = x2.bottomLeft;
	x4[2][1] = x2.bottomLeft;
	x4[3][0] = x2.bottomLeft;
	x4[3][1] = x2.bottomLeft;
	x4[2][2] = x2.bottomRight;
	x4[2][3] = x2.bottomRight;
	x4[3][2] = x2.bottomRight;
	x4[3][3] = x2.bottomRight;

	return x4;
}

export default class BlockObject extends GameObject {
	public blockType: EBlockType;
	private _blockState: BlockState4x4;
	
	constructor(game: Game, blockType: EBlockType, position: Point, blockState2x2: BlockState2x2) {
		super(game, EObjectType.BLOCK, position, Guid.newGuid());
		this.blockType = blockType;
		this._blockState = BlockState2x2To4x4(blockState2x2);
	}
	
	hit(eventOrigin: GameObject): void {
		if (!(eventOrigin instanceof BulletObject)) {
			return;
		}
		
	}
}