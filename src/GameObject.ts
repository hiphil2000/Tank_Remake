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
		this.position.w = this.spriteData.spritePosition.w;
		this.position.h = this.spriteData.spritePosition.h;
	}
	
	abstract draw(): void;
}

export interface Position {
	x: number;
	y: number;
	w?: number;
	h?: number;
}

export interface SpriteData {
	spriteImage: CanvasImageSource;
	spritePosition: Position;
}