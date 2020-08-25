import GameObject from "./GameObject";
import Game from "../Game";
import EObjectType from "./EObjectType";
import { Point } from "../../Utils/UnitTypes";
import EDirection from "../../Utils/EDirection";

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