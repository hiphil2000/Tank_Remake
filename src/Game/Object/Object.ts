import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import EObjectType from "./EObjectType";

export default abstract class Object {
	private _game: Game;
	private _objectType: EObjectType;
	private _positon: Point;

	constructor(game: Game, objectType: EObjectType, position?: Point) {
		this._game = game;
		this._objectType = objectType;
		if (position != undefined) {
			this._positon = position;
		} else {
			this._positon = {
				x: 0,
				y: 0
			};
		}
	}

	get position(): Point {
		return this._positon;
	}

	set position(position: Point) {
		if (position.x <= 0 || position.y <= 0) {
			throw 'position cannot be a negative value';
		}

		this._positon = position;
	}

	get objectType(): EObjectType {
		return this._objectType;
	}
}