import GameObject, { SpriteData, Position, Heading } from "./GameObject";
import { SPRITE_DEFINITION } from "./SpriteDefinition";
import { KeyState } from "./GameData";
import Game from "./Game";


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
	
	constructor(id: string, game: Game, spriteImage: HTMLImageElement, tankType: TankType, initialPosition?: Position) {
		console.log(tankType.color);
		let tankSprites = SPRITE_DEFINITION.tank[tankType.level][tankType.color];
		let spriteData: SpriteData = {
			spriteImage: spriteImage,
			spritePosition: tankSprites.up
		};
		super(id, game, spriteData, initialPosition);
		
		this._tankSprites = tankSprites;
		this._spritePosition = 0;
	}

	move(keyState: KeyState): boolean {
		let original = deepClone(this.position) as Position;

		// update data first
		let moved = false;
		if (keyState.arrow_right) {
			this.position.x++;
			this.position.heading = Heading.right;
			moved = true;
		} else if (keyState.arrow_left) {
			this.position.x--;
			this.position.heading = Heading.left;
			moved = true;
		} else if (keyState.arrow_up) {
			this.position.y--;
			this.position.heading = Heading.up;
			moved = true;
		} else if (keyState.arrow_down) {
			this.position.y++;
			this.position.heading = Heading.down;
			moved = true;
		}

		let impact = this.game.impactTest(this);
		if (moved && impact.length <= 0) {
			// free to move
			this._spritePosition = this._spritePosition + 1 > 1 ? 0 : this._spritePosition + 1;
		} else if (moved == false || (moved && impact.length > 0)) {
			// not moved or blocked by other object
			// then rollback position.
			this.position = original;
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
