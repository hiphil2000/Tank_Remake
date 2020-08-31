import GameObject from "./GameObject"
import EObjectType from "./Enum/EObjectType";
import { Guid, max, removeDuplicate } from "../../Utils/Utils";
import { Point, Size } from "../../Utils/UnitTypes";
import Game from "../Game";
import BulletObject from "./BulletObject";
import EDirection from "../../Utils/EDirection";
import MovingObject from "./MovingObject";
import { getSpriteSize } from "../../Render/Sprite/SpriteData";
import { BlockCollisionTest } from "../../Utils/CollisionTest";

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

export function BlockState4x4To2x2(x4: BlockState4x4): BlockState2x2 {
	let x2: BlockState2x2 = {
		topLeft: false,
		topRight: false,
		bottomLeft: false,
		bottomRight: false
	}

	if (x4[0][0] || x4[0][1] || x4[1][0] || x4[1][1]) {
		x2.topLeft = true;
	}
	if (x4[0][2] || x4[0][3] || x4[1][2] || x4[1][3]) {
		x2.topRight = true;
	}
	if (x4[2][0] || x4[2][1] || x4[3][0] || x4[3][1]) {
		x2.bottomLeft = true;
	}
	if (x4[2][2] || x4[2][3] || x4[3][2] || x4[3][3]) {
		x2.bottomRight = true;
	}

	return x2;
}

export default class BlockObject extends GameObject {
	public blockType: EBlockType;
	private _blockState: BlockState4x4;
	
	constructor(game: Game, blockType: EBlockType, position: Point, blockState2x2: BlockState2x2) {
		super(game, EObjectType.BLOCK, position, Guid.newGuid());
		this.blockType = blockType;
		this._blockState = BlockState2x2To4x4(blockState2x2);
	}

	//#region getter setter
	get blockState4x4(): BlockState4x4 {
		return this._blockState;
	}

	get blockState2x2(): BlockState2x2 {
		return BlockState4x4To2x2(this._blockState);
	}
	//#endregion

	public findCellPosition(row: number, column: number):Point {
		let blockSize = getSpriteSize(this);
		return {
			x: this.position.x + (blockSize.width / 4) * column,
			y: this.position.y + (blockSize.width / 4) * row
		}
	}
	
	hit(eventOrigin: GameObject): void {
		if (!(eventOrigin instanceof BulletObject)) {
			return;
		}
		const bullet = eventOrigin as BulletObject;
		if (bullet.parent.tankLevel < 3 && this.blockType === EBlockType.IRON) {
			return;
		}

		const blockSize = getSpriteSize(this);

		const collisionCells = BlockCollisionTest(this, bullet);
		const xPos = removeDuplicate(collisionCells.map(point => {
			return (point.x - this.position.x) / (blockSize.width / 4); 
		}));
		const yPos = removeDuplicate(collisionCells.map(point => {
			return (point.y - this.position.y) / (blockSize.height / 4);
		}));

		const b44 = this.blockState4x4;
		if (bullet.direction === EDirection.up || bullet.direction === EDirection.down) {
			if (xPos.includes(0) || xPos.includes(1)) {
				b44[yPos[0]][0] = false;
				b44[yPos[0]][1] = false;
				if (yPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
					b44[yPos[0] + 1][0] = false;
					b44[yPos[0] + 1][1] = false;
				}
			}
			if (xPos.includes(2) || xPos.includes(3)) {
				b44[yPos[0]][2] = false;
				b44[yPos[0]][3] = false;
				if (yPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
					b44[yPos[0] + 1][2] = false;
					b44[yPos[0] + 1][3] = false;
				}
			}
		} else if (bullet.direction === EDirection.left || bullet.direction === EDirection.right) {
			if (yPos.includes(0) || yPos.includes(1)) {
				b44[0][xPos[0]] = false;
				b44[1][xPos[0]] = false;
				if (xPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
					b44[0][xPos[0] + 1] = false;
					b44[1][xPos[0] + 1] = false;
				}
			}
			if (yPos.includes(2) || yPos.includes(3)) {
				b44[2][xPos[0]] = false;
				b44[3][xPos[0]] = false;
				if (xPos[0] + 1 < 4 && bullet.parent.tankLevel > 1) {
					b44[2][xPos[0] + 1] = false;
					b44[3][xPos[0] + 1] = false;
				}
			}
		}

		let available = false;
		b44.forEach(row => {
			row.forEach(cell => {
				if (cell === true) {
					available = cell;
				}
			});
		});
		if (available === false) {
			this.remove();
		}

		console.log(this.blockState4x4);
	}
}