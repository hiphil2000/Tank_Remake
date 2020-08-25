import MovingObject, { calculateMove } from "./MovingObject";
import EObjectType from "./EObjectType";
import EDirection from "../../Utils/EDirection";
import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import TankObject from "./TankObject";

export default class BulletObject extends MovingObject {
	private _parent: TankObject;

	constructor(game: Game, parent: TankObject, position: Point, direction: EDirection, speed: number, id: string) {
		super(game, EObjectType.BULLET, position, direction, speed, id);
		this._parent = parent;
	}

	move(): void {
		let changed = this.position;
		calculateMove(changed, this._direction, this._speed);
		console.log(this.position);
		if (this._game.testVisibility(this, this._game.getSprite(this)) === false) {
			console.log(`BULLET [${this.id}] HAS BEEN REMOVED.`);
			this.remove();
		}
	}

	remove() {
		super.remove();
		this._parent.removeBullet(this.id);
	}
}