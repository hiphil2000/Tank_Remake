import GameObject from "./GameObject";
import Game from "../Game";
import EObjectType from "./Enum/EObjectType";
import { Point } from "../../Utils/UnitTypes";
import EDirection from "../../Utils/EDirection";
import { DRAWING_CONST } from "../../Render/Renderer";
import BlockObject from "./BlockObject";
import { getSpriteSize, getObjectSize } from "../../Render/Sprite/SpriteData";
import { BlockCollisionTest } from "../../Utils/CollisionTest";
import { max, min } from "../../Utils/Utils";

export default abstract class MovingObject extends GameObject {
	protected _direction: EDirection;
	protected _speed: number;

	constructor(game: Game, objectType: EObjectType, position?: Point, direction?: EDirection, speed?: number, id?: string) {
		super(game, objectType, position, id);
		if (direction != undefined) {
			this._direction = direction;
		} else{
			this._direction = EDirection.up;
		}

		this._speed = speed;
	}

	get direction(): EDirection {
		return this._direction;
	}

	set direction(direction: EDirection) {
		this._direction = direction;
	}

	abstract move(): void;

	protected fitToBorder() {
		const frame = DRAWING_CONST.sizes.frame;
		const screen = DRAWING_CONST.sizes.screen; 

		let size = getSpriteSize(this);
		switch(this.direction) {
			case EDirection.left:
				this.position.x = frame.left;
				break;
			case EDirection.up:
				this.position.y = frame.top;
				break;
			case EDirection.down:
				this.position.y = screen.height + frame.top - size.height;
				break;
			case EDirection.right:
				this.position.x = screen.width + frame.left - size.width;
				break;
		}
	}

	protected fitToObject(object: GameObject, gap: number = 0) {
		const size = getSpriteSize(this);
		const tankSize = getObjectSize(this.objectType);
		const objectSize = getSpriteSize(object);

		if (object.objectType === EObjectType.BLOCK) {
			const block = object as BlockObject;
			const cellSize = {
				width: objectSize.width / 4,
				height: objectSize.height / 4
			};
			const adjustGap = cellSize.width * .8;

			const collision_cells = BlockCollisionTest(block, this);
			const xPos = collision_cells.map(point => { return point.x; });
			const yPos = collision_cells.map(point => { return point.y; });
			switch(this.direction) {
				case EDirection.left:
					if (xPos.length > 0) {
						if (yPos.length > 0) {
							if (this.position.y + tankSize.height - min(yPos) <= adjustGap) {
								this.position.y = min(yPos) - tankSize.height;
							} else if (max(yPos) + cellSize.height - this.position.y <= adjustGap) {
								this.position.y = max(yPos) + cellSize.height;
							}
						}
						this.position.x = max(xPos) + objectSize.width / 4 + gap;
					}
					break;
				case EDirection.up:
					if (yPos.length > 0) {
						if (xPos.length > 0) {
							if (this.position.x + tankSize.width - min(xPos) <= adjustGap) {
								this.position.x = object.position.x - tankSize.width;
							} else if (max(xPos) + cellSize.width - this.position.x <= adjustGap) {
								this.position.x = max(xPos) + cellSize.width;
							}
						}
						this.position.y = max(yPos) + cellSize.height + gap;
					}
					break;
				case EDirection.down:
					if (yPos.length > 0) {
						if (xPos.length > 0) {
							if (this.position.x + tankSize.width - min(xPos) <= adjustGap) {
								this.position.x = min(xPos) - tankSize.width;
							} else if (max(xPos) + cellSize.width - this.position.x <= adjustGap) {
								this.position.x = max(xPos) + cellSize.width;
							}
						}
						this.position.y = min(yPos) - size.height - gap;
					}
					break;
				case EDirection.right:
					if (xPos.length > 0) {
						if (yPos.length > 0) {
							if (this.position.y + tankSize.height - min(yPos) <= adjustGap) {
								this.position.y = min(yPos) - tankSize.height;
							} else if (max(yPos) + cellSize.height - this.position.y <= adjustGap) {
								this.position.y = max(yPos) + cellSize.height;
							}
						}
						this.position.x = min(xPos) - size.width - gap;
					}
					break;
			}
		} else {
			switch(this.direction) {
				case EDirection.left:
					this.position.x = object.position.x + objectSize.width;
					break;
				case EDirection.up:
					this.position.y = object.position.y + objectSize.height;
					break;
				case EDirection.down:
					this.position.y = object.position.y - size.height;
					break;
				case EDirection.right:
					this.position.x = object.position.x - size.width;
					break;
			}
		}
	}
}

export function calculateMove(position: Point, direction: EDirection, speed: number) {
	switch(direction) {
		case EDirection.up:
			position.y -= speed;
			break;
		case EDirection.right:
			position.x += speed;
			break;
		case EDirection.down:
			position.y += speed;
			break;
		case EDirection.left:
			position.x -= speed;
			break;
	}
}