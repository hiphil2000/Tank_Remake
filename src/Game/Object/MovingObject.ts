import Object from "./Object";
import Game from "../Game";
import EObjectType from "./EObjectType";
import { Point } from "../../Utils/UnitTypes";

export default abstract class MovingObject extends Object {
	private _direction: number;

	constructor(game: Game, objectType: EObjectType, position?: Point, direction?: number) {
		super(game, objectType, position);
		if (direction != undefined) {
			this._direction = direction;
		} else{
			this._direction = 0;
		}
	}

	get direction(): number {
		return this.direction;
	}

	set direction(direction: number) {
		if (direction <= 0 || direction > 270 || direction % 90 != 0) {
			throw 'invalid direction value';
		}
		this._direction = direction;
	}

	abstract move(): void;
}