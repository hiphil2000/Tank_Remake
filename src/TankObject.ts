import GameObject, { SpriteData, Position } from "./GameObject";
import { SPRITE_DEFINITION } from "./Sprite";
import { KeyState } from "./GameData";


export interface tankDefType {
	[key: string]: {
		up: Array<Position>,
		left: Array<Position>,
		down: Array<Position>,
		right: Array<Position>
	}
};

export interface TankType {
	color: TankColor,
	level: number
}

export enum TankColor {
	yellow = 'yellow',
	white = 'white',
	green = 'green',
	red = 'red'
};

interface DirectionalPosition {
	up: Position | Array<Position>,
	left: Position | Array<Position>,
	right: Position | Array<Position>,
	down: Position | Array<Position>,
}

export default class TankObject extends GameObject {
	private _tankSprites: DirectionalPosition;
	private _spritePosition: number;
	
	constructor(id: string, spriteImage: HTMLImageElement, tankType: TankType, initialPosition?: Position) {
		console.log(tankType.color);
		let tankSprites = SPRITE_DEFINITION.tank[tankType.level][tankType.color];
		let spriteData: SpriteData = {
			spriteImage: spriteImage,
			spritePosition: tankSprites.up
		};
		super(id, spriteData, initialPosition);
		
		this._tankSprites = tankSprites;
		this._spritePosition = 0;
	}

	move(keyState: KeyState): boolean {
		let moved = super.move(keyState);
		if (moved) {
			this._spritePosition = this._spritePosition + 1 > 1 ? 0 : this._spritePosition + 1;
			console.log('move');
		}

		return moved;
	}

	draw(context: CanvasRenderingContext2D): void {
		let spriteData = (this._tankSprites[this.position.heading] as Array<Position>)[this._spritePosition];
		context.fillStyle = "black";
		context.drawImage(
			this.spriteData.spriteImage,
			spriteData.x,
			spriteData.y,
			spriteData.width,
			spriteData.height,
			this.position.x,
			this.position.y,
			this.position.width,
			this.position.height
		);

	}
}
