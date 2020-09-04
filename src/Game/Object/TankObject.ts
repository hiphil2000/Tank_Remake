import { Point } from "../../Utils/UnitTypes";
import Game, { MAIN_TANK_ID } from "../Game";
import EObjectType from "./Enum/EObjectType";
import MovingObject, { calculateMove } from "./MovingObject";
import EDirection from "../../Utils/EDirection";
import BulletObject, { BULLET_SLOW, BULLET_FAST } from "./BulletObject";
import SPRTIE_DEF, { SpriteDef } from "../../Render/Sprite/SpriteDefinition";
import { Guid } from "../../Utils/Utils";
import EAnimationType from "./Enum/EAnimationType";
import ETankType, { EnemyType } from "./Enum/ETankType";
import GameObject from "./GameObject";

export const TANK_SPEED = 2;
export const TANK_FIRE_DELAY = 100;

export default class TankObject extends MovingObject {
	private _tankType: ETankType;
	private _tankColor: ETankColor;
	private _tankLevel: number;
	private _bullets: Array<string>;	// holds bullet's id
	protected _lastFired: number;

	private _isInvincible: boolean = false;

	//#region constructor
	constructor(game: Game, tankType: ETankType, position: Point, direction: EDirection, tankColor: ETankColor, tankLevel: number = 1, id?: string) {
		super(game, EObjectType.TANK, position, direction, TANK_SPEED, id != null ? id : Guid.newGuid());
		this._tankType = tankType;
		this._tankColor = tankColor;
		this._tankLevel = tankLevel;
		this._bullets = [];
		this.visible = false;
		this._lastFired = 0;

		this.spawn();
	}
	//#endregion

	//#region getter, setter
	get tankColor(): ETankColor {
		return this._tankColor;
	}

	get tankType(): ETankType {
		return this._tankType;
	}

	get isInvincible(): boolean {
		return this._isInvincible;
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
		calculateMove(this.position, this._direction, this._speed);
		this._game.log(`TANK [${this.id}] MOVED -> [ x: ${this.position.x}, y: ${this.position.y} ]`)
		
		// test movement is valid
		let test_visible = this._game.testVisibility(this);
		let test_collision = this._game.collisionTest(this);

		if (test_visible == false && test_collision.length == 0) {
			this.fitToBorder();
		} else if (test_collision.length > 0) {
			test_collision.forEach(object => {
				if (object.objectType === EObjectType.ITEM) {
					object.hit(this);
				} else {
					this.fitToObject(object);
					this._game.log(`TANK [${this.id}] MOVES -> BLOCKED!! [ x: ${this.position.x}, y: ${this.position.y} ]`)
				}
			});
		}

		this.nextSpritePosition();
	}

	hit(eventOrigin: GameObject) {
		if (this._isInvincible) {
			return;
		}
		this.destroy();
	}
	//#endregion
	
	//#region public methods
	public fire() {
		let now = performance.now();
		if (now - this._lastFired >= TANK_FIRE_DELAY) {
			this._lastFired = now;
			this.createBullet();
		}
	}

	public spawn() {
		this._game.startAnimation(this, EAnimationType.SPAWN, null, () => {
			this.visible = true;
			if (this == this._game.mainTank) {
				this.invincible();
			}
		})
	}

	public invincible() {
		this._isInvincible = true;
		this._game.startAnimation(this, EAnimationType.INVINCIBLE, null, (anim) => {
			this._isInvincible = false;
		})
	}

	public destroy() {
		this.remove();
		this._game.startAnimation(this, EAnimationType.EXPLOSION_SMALL, null, (animation) => {
			this._game.startAnimation(animation.animationPoint, EAnimationType.EXPLOSION_LARGE, null, () => {
				if (this.id === MAIN_TANK_ID) {
					this._game.spawnTank(this.tankType, false, 0);
				} else {
					this._game.spawnTank(this.tankType, false, 1);
				}
			});
		})
	}

	public levelup() {
		if (this.tankLevel < 3) {
			this.tankLevel++;
		}
	}

	private createBullet() {
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