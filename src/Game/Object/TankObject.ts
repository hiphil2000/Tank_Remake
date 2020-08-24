import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import EObjectType from "./EObjectType";
import MovingObject from "./MovingObject";
import EDirection from "../../Utils/EDirection";

export const TANK_SPEED = 2;

export default class TankObject extends MovingObject {
	private _tankColor: ETankColor;
	private _tankLevel: number;
	private _spritePosition: number;

	//#region constructor
	constructor(game: Game, position: Point, direction: EDirection, tankColor: ETankColor, tankLevel: number = 1, id?: string) {
		super(game, EObjectType.TANK, position, direction, TANK_SPEED, id);
		this._tankColor = tankColor;
		this._tankLevel = tankLevel;
		this._spritePosition = 0;
	}
	//#endregion

	//#region getter, setter
	get tankColor(): ETankColor {
		return this._tankColor;
	}

	get tankLevel(): number {
		return this._tankLevel;
	}

	get spritePosition(): number {
		return this._spritePosition;
	}
	//#endregion
	
	public nextSpritePosition(): number {
		this._spritePosition = this._spritePosition + 1 <= 1 ? this._spritePosition + 1 : 0;
		return this._spritePosition;
	}

	//#region implements of MovingObject	
	move() {
		// let changed = deepClone(this.position) as Point;
		let changed = this.position;
		switch(this.direction) {
			case EDirection.up:
				changed.y -= this._speed;
				break;
			case EDirection.right:
				changed.x += this._speed;
				break;
			case EDirection.down:
				changed.y += this._speed;
				break;
			case EDirection.left:
				changed.x -= this._speed;
				break;
		}
		this.nextSpritePosition();
	}
	//#endregion
}

export const enum ETankColor {
	YELLOW = 'YELLOW',
	GREEN = 'GREEN',
	MAGENTA = 'MAGENTA',
	WHITE = 'WHITE'
}