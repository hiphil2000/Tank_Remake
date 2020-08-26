import MovingObject, { calculateMove } from "./MovingObject";
import EObjectType from "./EObjectType";
import EDirection from "../../Utils/EDirection";
import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import TankObject from "./TankObject";
import AnimationObject from "./AnimationObject";
import EAnimationType from "./EAnimationType";

export const BULLET_SLOW = 4;
export const BULLET_FAST = 6;

export default class BulletObject extends MovingObject {
	private _parent: TankObject;

	constructor(game: Game, parent: TankObject, position: Point, direction: EDirection, speed: number, id: string) {
		super(game, EObjectType.BULLET, position, direction, speed, id);
		this._parent = parent;
	}

	get parentId(): string {
		return this._parent.id;
	}

	move(): void {
		let changed = this.position;
		calculateMove(changed, this._direction, this._speed);
		this._game.log(`BULLET [${this.id}] MOVED -> [x:${this.position.x}], y:[${this.position.y}]`);

		let test_visible = this._game.testVisibility(this, this._game.getSprite(this));
		let test_collision = this._game.collisionTest(this);

		if (test_visible == false || test_collision.length > 0) {
			this._game.log(`BULLET [${this.id}] EXPLODED.`);
			this.explode();
			test_collision.forEach(object => {
				object.hit(this);
			})
		}
	}

	hit() {
		this.explode();
	}

	explode() {
		let animationPosition: Point;
		let size = this._game.getSprite(this).size;

		if (this.direction === EDirection.up || this.direction === EDirection.down) {
			animationPosition = {
				x: this.position.x + size.width / 2,
				y: this.position.y
			};
		} else {
			animationPosition = {
				x: this.position.x,
				y: this.position.y + size.height / 2
			};
		}

		this._game.insertObject(new AnimationObject(
			this._game,
			EAnimationType.EXPLOSION_SMALL,
			this.position,
			200,
			200/4
		));

		this.remove();
	}

	remove() {
		super.remove();
		this._parent.removeBullet(this.id);
		this._game.log(`BULLET [${this.id}] HAS BEEN REMOVED.`);
	}
}