import GameObject from "../Game/Object/GameObject";
import BlockObject from "../Game/Object/BlockObject";
import { Point, Size } from "./UnitTypes";
import { getSpriteData } from "../Render/Sprite/SpriteData";

/**
* Tests two objects are collisions (rectangle bounding box collision test)
* @param object1 first object
* @param sprite1 first object's sprite data for size
* @param object2 second object
* @param sprite2 second object's sprite data for size
*/
export function ObjectCollisionTest(object1: GameObject, object2: GameObject): boolean {
	let size1 = getSpriteData(object1).size;
	let size2 = getSpriteData(object2).size;

	return RectangleCollisionTest(object1.position, size1, object2.position, size2);
}

export function BlockCollisionTest(block: BlockObject, object: GameObject): Array<Point> {
	const cells: Array<Point> = [];
	
	const blockSize = getSpriteData(block).size;
	const objectSize = getSpriteData(object).size;
	
	let cellPosition: Point;
	let cellSize = {
		width: blockSize.width / 4,
		height: blockSize.height / 4
	} as Size;

	for(let i = 0; i < block.blockState4x4.length; i++) {
		for(let j = 0; j < block.blockState4x4[i].length; j++) {
			if (block.blockState4x4[i][j] == false) {
				continue;
			}

			cellPosition = {
				x: block.position.x + (blockSize.width / 4) * j,
				y: block.position.y + (blockSize.height / 4) * i
			} as Point;
			if (RectangleCollisionTest(cellPosition, cellSize, object.position, objectSize)) {
				cells.push(cellPosition);
			}
		}
	}

	return cells;
}

export function RectangleCollisionTest(pos1: Point, size1: Size, pos2: Point, size2: Size) {
	if (pos1.x + size1.width >= pos2.x &&
		pos1.x <= pos2.x + size2.width &&
		pos1.y + size1.height >= pos2.y &&
		pos1.y <= pos2.y + size2.height
	) {
		return true;
	} else {
		return false;
	}
}