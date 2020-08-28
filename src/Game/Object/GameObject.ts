import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import EObjectType from "./Enum/EObjectType";

export default abstract class GameObject {
	public readonly id: string | undefined;
	public readonly objectType: EObjectType;
	public visible: boolean;
	protected _game: Game;
	protected _positon: Point;
	protected _spritePosition: number;

	constructor(game: Game, objectType: EObjectType, position?: Point, id?: string, visible: boolean = true) {
		this._game = game;
		this.visible = visible;
		this.objectType = objectType;
		this._spritePosition = 0;
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

	get spritePosition(): number {
		return this._spritePosition;
	}

	set position(position: Point) {
		if (position.x <= 0 || position.y <= 0) {
			throw 'position cannot be a negative value';
		}

		this._positon = position;
	}

	remove() {
		this._game.removeObject(this);
	}

	public nextSpritePosition(): number {
		this._spritePosition = this._spritePosition + 1 <= 1 ? this._spritePosition + 1 : 0;
		return this._spritePosition;
	}

	abstract hit(eventOrigin: GameObject): void;
}