import { KeyState } from "./GameData";

export default abstract class GameObject {
	id: string;
	position: Position;
	spriteData: SpriteData;

	constructor(id: string, spriteData: SpriteData, initialPosition?: Position) {
		this.id = id;
		this.spriteData = spriteData;
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

	move(keyState: KeyState): boolean {
		if (keyState.arrow_right) {
			this.position.x++;
			this.position.heading = Heading.right;
			return true;
		} else if (keyState.arrow_left) {
			this.position.x--;
			this.position.heading = Heading.left;
			return true;
		} else if (keyState.arrow_up) {
			this.position.y--;
			this.position.heading = Heading.up;
			return true;
		} else if (keyState.arrow_down) {
			this.position.y++;
			this.position.heading = Heading.down;
			return true;
		}
		return false;
	}
	
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