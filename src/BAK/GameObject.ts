import { KeyState } from "./GameData";
import Game from "./Game";

export default abstract class GameObject {
	id: string;
	game: Game;
	position: Position;
	spriteData: SpriteData;

	constructor(id: string, game: Game, spriteData: SpriteData, initialPosition?: Position) {
		this.id = id;
		this.spriteData = spriteData;
		this.game = game;
		if (initialPosition != undefined) {
			this.position = initialPosition;
		} else {
			this.position.x = 0;
			this.position.y = 0;
		}

		if (this.spriteData.spritePosition instanceof Array) {
			let position: Array<Position> = this.spriteData.spritePosition;
			if (position.length > 0) {
				this.position.width = position[0].width;
				this.position.height = position[0].height;
			}
		} else {
			let position: Position = this.spriteData.spritePosition
			this.position.width = position.width;
			this.position.height = position.height;
		}
	}

	abstract move(keyState: KeyState): boolean;
	
	abstract draw(context: CanvasRenderingContext2D): void;
}

export interface Position {
	x: number;
	y: number;
	width?: number;
	height?: number;
	heading?: Heading;
}

export enum Heading {
	up = 'up',
	right = 'right',
	down = 'down',
	left = 'left'
};


export interface SpriteData {
	spriteImage: HTMLImageElement;
	spritePosition: Position | Array<Position>;
}