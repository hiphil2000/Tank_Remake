import Game from "../Game/Game";
import GameObject from "../Game/Object/GameObject";
import EObjectType from "../Game/Object/EObjectType";
import SPRTIE_DEF from "./Sprite/SpriteDefinition";
import TankObject from "../Game/Object/TankObject";
import { Point } from "../Utils/UnitTypes";

export const MAX_FPS = 60;
export const DRAWING_CONST = {
	colors: {
		background: "#000000",
		background_frame: "#949494",

	},
	sizes: {
		frame: {
			left: 16,
			top: 10,
			bottom: 10,
			right: 32
		}
	}
}

export default class Renderer {
	private _game: Game;
	private _canvas: HTMLCanvasElement;
	private _sprite: HTMLImageElement;

	private _fps = {
		fpsInterval: 1000 / MAX_FPS,
		now: performance.now(),
		then: performance.now(),
		elapsed: 0
	};
	
	constructor(game: Game, canvas: HTMLCanvasElement, spriteSrc: string) {
		if (canvas == undefined) {
			throw 'canvas is null or undefined';
		}
		this._canvas = canvas;

		if (game == undefined) {
			throw 'game is null or undefined';
		}
		this._game = game;
		
		this.initScreen();
		this.loadSprite(spriteSrc);
	}

	private loadSprite(src: string) {
		this._sprite = new Image();
		this._sprite.onload = () => {
			this.render();
		}
		this._sprite.src = src;
	}

	private initScreen() {
		this._canvas.width = 600;
		this._canvas.height = 600;
	}

	private render() {
		requestAnimationFrame(() => {this.render();});
		let fps = this._fps;

		fps.now = performance.now();
		fps.elapsed = fps.now - fps.then;

		if (fps.elapsed > fps.fpsInterval) {
			fps.then = fps.now - (fps.elapsed % fps.fpsInterval);
			
			// process move action
			let mainTank = this._game.mainTank;
			if (this._game.isTankMoveReady) {
				mainTank.move();
			}

			// start drawing
			// get context
			let ctx = this._canvas.getContext('2d');
			ctx.save();

			// clear screen
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			// draw backgrounds
			this.drawBackground(ctx);

			// draw objects
			this.drawObjects(ctx, this._game.getObjects());

			// draw debug counter
			this.drawDebugCounter(ctx);
		}
	}

	private drawBackground(ctx: CanvasRenderingContext2D) {
		ctx.save();

		ctx.fillStyle = DRAWING_CONST.colors.background_frame;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.restore();

		ctx.fillStyle = DRAWING_CONST.colors.background;
		ctx.fillRect(
			DRAWING_CONST.sizes.frame.left,
			DRAWING_CONST.sizes.frame.top,
			ctx.canvas.width - (DRAWING_CONST.sizes.frame.left + DRAWING_CONST.sizes.frame.right),
			ctx.canvas.height - (DRAWING_CONST.sizes.frame.top + DRAWING_CONST.sizes.frame.bottom)
		);
		ctx.restore();
	}

	private drawObjects(ctx: CanvasRenderingContext2D, objects: Array<GameObject>) {
		ctx.save();

		for(let i = 0; i < objects.length; i++) {
			let object = objects[i];
			switch(object.objectType) {
				case EObjectType.TANK: 
					let tank = object as TankObject;
					let sprite = SPRTIE_DEF.TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
					
					ctx.drawImage(
						this._sprite,
						sprite.position.x,
						sprite.position.y,
						sprite.size.width,
						sprite.size.height,
						DRAWING_CONST.sizes.frame.left + object.position.x,
						DRAWING_CONST.sizes.frame.top + object.position.y,
						sprite.size.width,
						sprite.size.height
					);
					break;
			}

			ctx.restore();
		}
	}

	private drawDebugCounter(ctx: CanvasRenderingContext2D) {
		let keyState = this._game.keyState;
		this.drawText(ctx, `${(1000 / this._fps.elapsed).toFixed(2)}fps `, {x: 0, y: ctx.canvas.height});
		this.drawText(ctx, `ArrowLeft: ${keyState.ArrowLeft ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 20});
		this.drawText(ctx, `ArrowDown: ${keyState.ArrowDown ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 40});
		this.drawText(ctx, `ArrowRight: ${keyState.ArrowRight ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 60});
		this.drawText(ctx, `ArrowUp: ${keyState.ArrowUp ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 80});
	}

	private drawText(ctx: CanvasRenderingContext2D, text: string, position: Point) {
		ctx.save();

		ctx.font = '20px san-serif';
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 2;
		ctx.strokeText(text, position.x, position.y);

		ctx.fillStyle = 'black';
		ctx.fillText(text, position.x, position.y);
		
		ctx.restore();

	}
}