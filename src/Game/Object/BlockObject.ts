import GameObject from "./GameObject"
import EObjectType from "./Enum/EObjectType";
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
	private _blockState: BlockState2x2;
	
	constructor(game: Game, blockType: EBlockType, position: Point, blockState2x2: BlockState2x2) {
		super(game, EObjectType.BLOCK, position, Guid.newGuid());
		this.blockType = blockType;
		this._blockState = blockState2x2;
	}

	//#region getter setter
	get blockState4x4(): BlockState4x4 {
		return BlockState2x2To4x4(this._blockState);
	}

	get blockState2x2(): BlockState2x2 {
		return this._blockState;
	}
	//#endregion

	public findCellPosition(row: number, column: number):Point {
		let blockSize = this._game.getSprite(this).size;
		return {
			x: this.position.x + (blockSize.width / 4) * column,
			y: this.position.y + (blockSize.width / 4) * row
		}
	}
	
	hit(eventOrigin: GameObject): void {
		if (!(eventOrigin instanceof BulletObject)) {
			return;
		}
		let bullet = eventOrigin as BulletObject;

	}

	// private getLastCorner(bullet: BulletObject): Array<number> {
	// 	let blockSize = this._game.getSprite(this).size;
	// 	let b44 = this.blockState4x4;
	// 	let corners: Array<number>;

	// 	switch(bullet.direction) {
	// 		case EDirection.left:
	// 			corners = new Array(4).fill(-1, 0);
	// 			for(let i = 0; i < b44.length; i++) {
	// 				corners[i] = b44[i].lastIndexOf(true);
	// 			}
	// 			return [
	// 				Math.max(corners[0], corners[1]),
	// 				Math.max(corners[2], corners[3])
	// 			]
	// 		case EDirection.up:
	// 			corners = new Array(4).fill(-1, 0);
	// 			for(let i = 0; i < blockSize.width / 8; i++) {
	// 				for(let j = 0; j < blockSize.height / 8; j++) {
	// 					if (b44[j][i] == true && j > corners[i]) {
	// 						corners[i] = j;
	// 					}
	// 				}
	// 			}
	// 			return [
	// 				Math.max(corners[0], corners[1]),
	// 				Math.max(corners[2], corners[3])
	// 			]
	// 		case EDirection.right:
	// 			corners = new Array(4).fill(99, 0);
	// 			for(let i = 0; i < b44.length; i++) {
	// 				corners[i] = b44[i].indexOf(true);
	// 			}
	// 			return [
	// 				Math.min(corners[0], corners[1]),
	// 				Math.min(corners[2], corners[3])
	// 			]
	// 		case EDirection.down:		
	// 			corners = new Array(4).fill(99, 0);
	// 			for(let i = blockSize.width / 8 - 1; i >= 0; i--) {
	// 				for(let j = blockSize.height / 8 - 1; j >= 0; j--) {
	// 					if (b44[j][i] == true && j < corners[i]) {
	// 						corners[i] = j;
	// 					}
	// 				}
	// 			}
	// 			return [
	// 				Math.min(corners[0], corners[1]),
	// 				Math.min(corners[2], corners[3])
	// 			]
	// 	}
	// }
}