import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import EObjectType from "./EObjectType";
import MovingObject from "./MovingObject";

export default class TankObject extends MovingObject {
	private _tankColor: ETankColor;
	private _tankLevel: number;

	//#region constructor
	constructor(game: Game, position: Point, direction: number, tankColor: ETankColor, tankLevel: number = 1) {
		super(game, EObjectType.TANK, position, direction);
		this._tankColor = tankColor;
		this._tankLevel = tankLevel;
	}
	//#endregion

	//#region getter, setter
	get tankColor(): ETankColor {
		return this._tankColor;
	}

	get tankLevel(): number {
		return this._tankLevel;
	}
	//#endregion

	//#region implements of MovingObject	
	public move() {

	}
	//#endregion
}

export const enum ETankColor {
	YELLOW,
	GREEN,
	MAGENTA,
	WHITE
}