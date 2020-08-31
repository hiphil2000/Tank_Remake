import GameObject from "./GameObject";
import Game from "../Game";
import EObjectType from "./Enum/EObjectType";
import { Point } from "../../Utils/UnitTypes";
import { Guid } from "../../Utils/Utils";
import EAnimationType from "./Enum/EAnimationType";
import SPRTIE_DEF from "../../Render/Sprite/SpriteDefinition";
import { getSpriteSize } from "../../Render/Sprite/SpriteData";


export default class AnimationObject extends GameObject {
	public readonly animationType: EAnimationType;
	private _animationPoint: Point;
	
	private _currentTime: number;
	private _expireTime: number;
	private _frameCount: number;
	private _frameRate: number;
	private _loop: boolean;
	private _callback: (animation: AnimationObject) => void;

	constructor(game: Game, animationType: EAnimationType, animationPoint: Point, duration: number, frameRate: number, loop: boolean = false, callback?: (animation: AnimationObject) => void) {
		super(game, EObjectType.ANIMATION, animationPoint, Guid.newGuid());
		this.animationType = animationType;
		this._animationPoint = animationPoint;
		this._spritePosition = 0;
		this._currentTime = performance.now();
		this._expireTime = this._currentTime + duration;
		this._frameCount = SPRTIE_DEF.ANIMATION[this.animationType].length
		this._frameRate = frameRate;
		this._loop = loop;
		this._callback = callback;
		this.updatePosition();
	}

	//#region getter, setter
	get animationPoint(): Point {
		return this._animationPoint;
	}

	set animationPoint(animationPoint: Point) {
		this._animationPoint = animationPoint;
		this.updatePosition();
	}

	get expireTime(): number {
		return this._expireTime;
	}
	//#endregion

	//#region public methods

	// ignore hit event
	hit(): void {}

	public nextSpritePosition(): number {
		this._game.log(`[${this.spritePosition} / ${this._frameCount - 1}]${performance.now() - this._currentTime} >= ${this._frameRate}`);
		if (performance.now() - this._currentTime >= this._frameRate) {
			this._currentTime = performance.now();
			if (this._spritePosition + 1 < this._frameCount) {
				this._spritePosition++;
			} else if(this._loop) {
				this._spritePosition = 0;
			}

			this.updatePosition();
		}
		return this._spritePosition;
	}

	public expire() {
		this._game.log(`ANIMATION ${this.id} HAS BEEN EXPIRED. (${performance.now})`);
		this.remove();
		if (this._callback) {
			this._callback(this);
		}
	}
	//#endregion

	private updatePosition() {
		let spriteData = getSpriteSize(this);
		this._positon = {
			x: this._animationPoint.x - spriteData.width / 2,
			y: this._animationPoint.y - spriteData.height / 2
		}
	}
}