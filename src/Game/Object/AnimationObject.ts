import GameObject from "./GameObject";
import Game from "../Game";
import EObjectType from "./EObjectType";
import { Point } from "../../Utils/UnitTypes";
import { Guid } from "../../Utils/Utils";
import EAnimationType from "./EAnimationType";
import SPRTIE_DEF from "../../Render/Sprite/SpriteDefinition";


export default class AnimationObject extends GameObject {
	public readonly animationType: EAnimationType;
	private _animationPoint: Point;
	
	private _currentTime: number;
	private _expireTime: number;
	private _spritePosition: number;
	private _frameCount: number;
	private _frameRate: number;
	private _loop: boolean;

	constructor(game: Game, animationType: EAnimationType, animationPoint: Point, duration: number, frameRate: number, loop: boolean = false) {
		super(game, EObjectType.ANIMATION, animationPoint, Guid.newGuid());
		this.animationType = animationType;
		this._animationPoint = animationPoint;
		this._spritePosition = 0;
		this._currentTime = performance.now();
		this._expireTime = this._currentTime + duration;
		this._frameCount = SPRTIE_DEF.ANIMATION[this.animationType].length
		this._frameRate = frameRate;
		this._loop = loop;
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

	get spritePosition(): number {
		return this._spritePosition;
	}

	get expireTime(): number {
		return this._expireTime;
	}
	//#endregion

	//#region public methods
	public nextSpritePosition(): number {
		console.log(`[${this.spritePosition} / ${this._frameCount - 1}]${performance.now() - this._currentTime} >= ${this._frameRate}`);
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
	//#endregion

	private updatePosition() {
		let spriteData = this._game.getSprite(this).size;
		this._positon = {
			x: this._animationPoint.x - spriteData.width / 2,
			y: this._animationPoint.y - spriteData.height / 2
		}
	}
}