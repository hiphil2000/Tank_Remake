import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import EObjectType from "./EObjectType";

export default abstract class GameObject {
	public readonly id: string | undefined;
	public readonly objectType: EObjectType;
	protected _game: Game;
	protected _positon: Point;

	constructor(game: Game, objectType: EObjectType, position?: Point, id?: string) {
		this._game = game;
		this.objectType = objectType;
		if (position != undefined) {
			this._positon = position;
		} else {
			this._positon = {
				x: 0,
				y: 0
			};
		}
		if (id != undefined) {
			this.id = id;
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
}