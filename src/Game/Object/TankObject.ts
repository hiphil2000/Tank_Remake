import { Point } from "../../Utils/UnitTypes";
import Game from "../Game";
import EObjectType from "./EObjectType";
import MovingObject, { calculateMove } from "./MovingObject";
import EDirection from "../../Utils/EDirection";
import BulletObject, { BULLET_SLOW, BULLET_FAST } from "./BulletObject";
import SPRTIE_DEF, { SpriteDef } from "../../Render/Sprite/SpriteDefinition";
import { Guid, deepClone } from "../../Utils/Utils";
import EAnimationType from "./EAnimationType";

export const TANK_SPEED = 2;

export default class TankObject extends MovingObject {
	private _tankColor: ETankColor;
	private _tankLevel: number;
	private _bullets: Array<string>;	// holds bullet's id

	private _isInvincible: boolean = false;

	//#region constructor
	constructor(game: Game, position: Point, direction: EDirection, tankColor: ETankColor, tankLevel: number = 1, id?: string) {
		super(game, EObjectType.TANK, position, direction, TANK_SPEED, id);
		this._tankColor = tankColor;
		this._tankLevel = tankLevel;
		this._bullets = [];
	}
	//#endregion

	//#region getter, setter
	get tankColor(): ETankColor {
		return this._tankColor;
	}

	// TODO: REMOVE WHEN DEPLOY
	set tankColor(color: ETankColor) {
		this._tankColor = color;
	}
	// TODO: REMOVE WHEN DEPLOY
	set tankLevel(level: number) {
		this._tankLevel = level;
	}

	get tankLevel(): number {
		return this._tankLevel;
	}
	//#endregion
	
	//#region implements of MovingObject	
	move() {
		let original = deepClone(this.position) as Point;
		calculateMove(this.position, this._direction, this._speed);
		// test movement is valid
		this._game.log(`TANK [${this.id}] MOVED -> [ x: ${this.position.x}, y: ${this.position.y} ]`)

		let test_visible = this._game.testVisibility(this, this._game.getSprite(this));
		let test_collision = this._game.collisionTest(this);

		if (!test_visible || test_collision.length > 0) {
			// if not, rollback movement
			this.position = original;
			this._game.log(`TANK [${this.id}] MOVES -> BLOCKED!! [ x: ${this.position.x}, y: ${this.position.y} ]`)
		}
		this.nextSpritePosition();
	}

	hit() {
		if (this._isInvincible) {
			return;
		}
		this._game.startAnimation(this, EAnimationType.EXPLOSION_SMALL, null, (animation) => {
			this._game.startAnimation(animation.animationPoint, EAnimationType.EXPLOSION_LARGE, null, () => {
				this.remove();
			});
		})
	}
	//#endregion
	
	//#region public methods
	public fire() {
		this.createBullet();
	}

	public invincible() {
		this._isInvincible = true;
		this._game.startAnimation(this, EAnimationType.INVINCIBLE, null, (anim) => {
			this._isInvincible = false;
		})
	}

	protected createBullet() {
		if (this.tankLevel < 2 && this._bullets.length >= 1) {
			return;
		} else if (this.tankLevel < 4 && this._bullets.length >= 2) {
			return;
		}
		let position: Point;
		let tankSprite = SPRTIE_DEF.TANK[this.tankColor][this.tankLevel][this.direction][this.spritePosition];
		let bulletSprite = SPRTIE_DEF.BULLET[this.direction];
		switch(this.direction) {
			case EDirection.up:
				position = {
					x: this.position.x + this.getMiddle(tankSprite, bulletSprite, this.direction),
					y: this.position.y
				};
				break;
			case EDirection.right:
				position = {
					x: this.position.x + tankSprite.size.width,
					y: this.position.y + this.getMiddle(tankSprite, bulletSprite, this.direction)
				};
				break;
			case EDirection.down:
				position = {
					x: this.position.x + this.getMiddle(tankSprite, bulletSprite, this.direction),
					y: this.position.y + tankSprite.size.height
				};
				break;
			case EDirection.left:
				position = {
					x: this.position.x,
					y: this.position.y + this.getMiddle(tankSprite, bulletSprite, this.direction)
				}
				break;
		}

		let bulletSpeed: number;
		if (this.tankLevel == 0) {
			bulletSpeed = BULLET_SLOW
		} else if (this.tankLevel < 4) {
			bulletSpeed = BULLET_FAST
		}

		let bullet = new BulletObject(
			this._game, this, 
			position, 
			this.direction, 
			bulletSpeed,
			Guid.newGuid()
		);
		
		this._game.insertObject(bullet);
		this._bullets.push(bullet.id);
	}

	public removeBullet(id: string) {
		let found = this._bullets.find(bullet => { return bullet === id; });
		let idx = this._bullets.indexOf(found);
		if (idx > -1) {
			this._bullets.splice(idx, 1);
		}
	}
	//#endregion
	
	private getMiddle(parent: SpriteDef, child: SpriteDef, direction: EDirection): number {
		if (direction === EDirection.up || direction === EDirection.down) {
			return parent.size.width / 2 - child.size.width / 2;
		} else {
			return parent.size.height / 2 - child.size.height / 2;
		}
	}
}

export const enum ETankColor {
	YELLOW = 'YELLOW',
	GREEN = 'GREEN',
	MAGENTA = 'MAGENTA',
	WHITE = 'WHITE'
}