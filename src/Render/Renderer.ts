import Game, { DEBUG } from "../Game/Game";
import GameObject from "../Game/Object/GameObject";
import EObjectType from "../Game/Object/EObjectType";
import SPRTIE_DEF, { SpriteDef } from "./Sprite/SpriteDefinition";
import TankObject from "../Game/Object/TankObject";
import { Point, Size } from "../Utils/UnitTypes";
import BulletObject from "../Game/Object/BulletObject";
import AnimationObject from "../Game/Object/AnimationObject";
import EAnimationType from "../Game/Object/EAnimationType";

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
	},
	debug: {
		font: {
			size: 12,
			font: 'san-serif'
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
			// main tank moves
			let mainTank = this._game.mainTank;
			if (this._game.isTankMoveReady) {
				mainTank.move();
			}

			// bullet moves
			let objects = this._game.getObjects();
			if (objects){
				objects.forEach(object => {
					switch(object.objectType) {
						case EObjectType.BULLET:
							(object as BulletObject).move();
							break;
						case EObjectType.ANIMATION:
							let animation = object as AnimationObject;
							if (animation.expireTime < this._fps.now) {
								console.log(`ANIMATION ${animation.id} HAS BEEN EXPIRED. (exp: ${animation.expireTime}, now: ${this._fps.now})`);
								animation.remove();
							}
							
							if (animation.animationType === EAnimationType.INVINCIBLE) {
								let tankSize = this.getSpriteData(this._game.mainTank).size;
								animation.animationPoint = {
									x: mainTank.position.x + tankSize.width / 2,
									y: mainTank.position.y + tankSize.height / 2
								};
							}

							animation.nextSpritePosition();
							break;
					}
				})
			}

			// start drawing
			// get context
			let ctx = this._canvas.getContext('2d');
			ctx.save();

			// clear screen
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			// draw backgrounds
			this.drawBackground(ctx);

			// draw frame
			this.drawFrame(ctx);

			// draw objects
			this.drawObjects(ctx, this._game.getObjects());

			// draw debug counter
			this.drawDebugCounter(ctx);
		}
	}

	private drawBackground(ctx: CanvasRenderingContext2D) {
		ctx.save();

		ctx.fillStyle = DRAWING_CONST.colors.background;
		ctx.fillRect(
			DRAWING_CONST.sizes.frame.left,
			DRAWING_CONST.sizes.frame.top,
			ctx.canvas.width - (DRAWING_CONST.sizes.frame.left + DRAWING_CONST.sizes.frame.right),
			ctx.canvas.height - (DRAWING_CONST.sizes.frame.top + DRAWING_CONST.sizes.frame.bottom)
		);
		ctx.restore();
	}

	private drawFrame(ctx: CanvasRenderingContext2D) {
		ctx.save();

		ctx.fillStyle = DRAWING_CONST.colors.background_frame;
		// top
		ctx.fillRect(0, 0, ctx.canvas.width, DRAWING_CONST.sizes.frame.top);
		// left
		ctx.fillRect(0, 0, DRAWING_CONST.sizes.frame.left, ctx.canvas.height);
		// bottom
		ctx.fillRect(0, ctx.canvas.height - DRAWING_CONST.sizes.frame.bottom, ctx.canvas.width, DRAWING_CONST.sizes.frame.bottom);
		// right
		ctx.fillRect(ctx.canvas.width - DRAWING_CONST.sizes.frame.right, 0, DRAWING_CONST.sizes.frame.right, ctx.canvas.height);
		ctx.restore();

	}

	private drawObjects(ctx: CanvasRenderingContext2D, objects: Array<GameObject>) {
		ctx.save();

		for(let i = 0; i < objects.length; i++) {
			let object = objects[i];
			let sprite = this.getSpriteData(object);
			if (sprite != null) {
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
			}
			if (DEBUG) {
				ctx.strokeStyle = '#FF0000';
				ctx.strokeRect(
					DRAWING_CONST.sizes.frame.left + object.position.x,
					DRAWING_CONST.sizes.frame.top + object.position.y,
					sprite.size.width,
					sprite.size.height
				);
				this.drawText(ctx, `${object.id}`, {
					x: DRAWING_CONST.sizes.frame.left + object.position.x,
					y: DRAWING_CONST.sizes.frame.top + object.position.y - 1,
				}, sprite.size.width);
			}

			ctx.restore();
		}
	}

	private drawDebugCounter(ctx: CanvasRenderingContext2D) {
		let tank = this._game.mainTank;
		if (tank != null) {
			this.drawText(ctx, `MAIN TANK: TANK_${tank.tankColor}_${tank.tankLevel}(${tank.position.x}, ${tank.position.y}, ${tank.direction.toString()})`, {x: 0, y: 15});
		} else {
			this.drawText(ctx, `MAIN TANK: NOT FOUND`, {x: 0, y: 15});
		}

		let fps = `${(1000 / this._fps.elapsed).toFixed(2)}fps `;
		this.drawText(ctx, fps, {x: ctx.canvas.width - (ctx.measureText(fps).width * 1.35), y: 15});

		let keyState = this._game.keyState;
		this.drawText(ctx, `Space: ${keyState.Space ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height});
		this.drawText(ctx, `ArrowLeft: ${keyState.ArrowLeft ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 15});
		this.drawText(ctx, `ArrowDown: ${keyState.ArrowDown ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 30});
		this.drawText(ctx, `ArrowRight: ${keyState.ArrowRight ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 45});
		this.drawText(ctx, `ArrowUp: ${keyState.ArrowUp ? 'T' : 'F'}`, {x: 0, y: ctx.canvas.height - 60});
		this.drawText(ctx, `[IKeyState]`, {x: 0, y: ctx.canvas.height - 75});

	}

	private drawText(ctx: CanvasRenderingContext2D, text: string, position: Point, maxWidth?: number) {
		ctx.save();

		ctx.font = `${DRAWING_CONST.debug.font.size}px ${DRAWING_CONST.debug.font.font}`;
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 2;
		ctx.strokeText(text, position.x, position.y, maxWidth);

		ctx.fillStyle = 'black';
		ctx.fillText(text, position.x, position.y, maxWidth);
		
		ctx.restore();

	}

	//#region public methods
	/**
	 * Find sprite data for given object
	 * @param object found sprite definition
	 */
	public getSpriteData(object: GameObject): SpriteDef {
		switch(object.objectType) {
			case EObjectType.TANK:
				let tank = object as TankObject;
				return SPRTIE_DEF.TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
			case EObjectType.BULLET:
				let bullet = object as BulletObject;
				return SPRTIE_DEF.BULLET[bullet.direction];
			case EObjectType.ANIMATION:
				let animation = object as AnimationObject;
				return SPRTIE_DEF.ANIMATION[animation.animationType][animation.spritePosition];
		}
	}
	
	/**
	 * Tests two objects are collisions (rectangle collision test)
	 * @param object1 first object
	 * @param sprite1 first object's sprite data for size
	 * @param object2 second object
	 * @param sprite2 second object's sprite data for size
	 */
	public rectangleCollisionTest(object1: GameObject, sprite1: SpriteDef, object2: GameObject, sprite2: SpriteDef): boolean {
		if (object1.position.x + sprite1.size.width >= object2.position.x &&
			object1.position.x <= object2.position.x + sprite2.size.width &&
			object1.position.y + sprite1.size.height >= object2.position.y &&
			object1.position.y <= object2.position.y + sprite2.size.height
		) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Test object is visible
	 * @param object object for test
	 * @param sprite object's sprite data for size
	 */
	public testVisibility(object: GameObject, sprite: SpriteDef): boolean { 
		let ctx = this._canvas.getContext('2d');
		if (object.position.x + sprite.size.width <= ctx.canvas.width - DRAWING_CONST.sizes.frame.right &&
			object.position.x >= DRAWING_CONST.sizes.frame.left &&
			object.position.y + sprite.size.height <= ctx.canvas.height - DRAWING_CONST.sizes.frame.bottom &&
			object.position.y >= DRAWING_CONST.sizes.frame.top
		) {
			return true;
		} else {
			return false;
		}
	}

	public randomPoint(size: Size): Point {
		return {
			x: this.getRandomRange(
				DRAWING_CONST.sizes.frame.left,
				this._canvas.width - DRAWING_CONST.sizes.frame.right - size.width),
			y: this.getRandomRange(
				DRAWING_CONST.sizes.frame.top,
				this._canvas.height - DRAWING_CONST.sizes.frame.bottom - size.height),
		};
	}

	private getRandomRange(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min) + min);
	}
	//#endregion
}