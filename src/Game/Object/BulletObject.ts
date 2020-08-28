import MovingObject, { calculateMove } from "./MovingObject";
import EObjectType from "./Enum/EObjectType";
import EDirection from "../../Utils/EDirection";
import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import TankObject from "./TankObject";
import AnimationObject from "./AnimationObject";
import EAnimationType from "./Enum/EAnimationType";
import { deepClone } from "../../Utils/Utils";

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
		let original = deepClone(this.position) as Point;
		calculateMove(this.position, this._direction, this._speed);
		this._game.log(`BULLET [${this.id}] MOVED -> [x:${this.position.x}], y:[${this.position.y}]`);

		let test_visible = this._game.testVisibility(this);
		let test_collision = this._game.collisionTest(this);

		if (test_visible == false || test_collision.length > 0) {
			this.position = original;
			this._game.log(`BULLET [${this.id}] EXPLODED.`);
			let exploded = true;
			test_collision.forEach(object => {
				if (object.objectType === EObjectType.BULLET) {
					exploded = false;
				}
				if (object.objectType === EObjectType.TANK && (object as TankObject).isInvincible) {
					exploded = false;
				}
				object.hit(this);
			})

			this.explode(exploded);
		}
	}

	hit() {
		this.explode(false);
	}

	explode(animation: boolean) {
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

		if (animation) {
			this._game.startAnimation(this, EAnimationType.EXPLOSION_SMALL);
			this.remove();
		}
	}

	remove() {
		super.remove();
		this._parent.removeBullet(this.id);
		this._game.log(`BULLET [${this.id}] HAS BEEN REMOVED.`);
	}
}