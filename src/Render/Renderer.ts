import Game from "../Game/Game";
import GameObject from "../Game/Object/GameObject";
import EObjectType from "../Game/Object/Enum/EObjectType";
import SPRTIE_DEF, { SpriteDef } from "./Sprite/SpriteDefinition";
import TankObject from "../Game/Object/TankObject";
import BulletObject from "../Game/Object/BulletObject";
import AnimationObject from "../Game/Object/AnimationObject";
import EAnimationType from "../Game/Object/Enum/EAnimationType";
import BlockObject from "../Game/Object/BlockObject";
import ItemObject from "../Game/Object/ItemObject";
import { getSpriteData } from "./Sprite/SpriteData";
import EDirection from "../Utils/EDirection";
import { Point, Size } from "../Utils/UnitTypes";
import { getRandomRange } from "../Utils/Utils";

export const MAX_FPS = 60;
export const DRAWING_CONST = {
	colors: {
		background: "#000000",
		background_frame: "#949494",

	},
	sizes: {
		frame: {
			left: 32,
			top: 24,
			bottom: 24,
			right: 32
		},
		screen: {
			width: 32 * 13,
			height: 32 * 13
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
		this._canvas.width = DRAWING_CONST.sizes.screen.width;
		this._canvas.height = DRAWING_CONST.sizes.screen.height;
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
			const mainTank = this._game.mainTank;
			if ( mainTank != null && mainTank.visible === true && this.checkKeyStateSync())
			{
				mainTank.move();	
			}

			// other objects
			let objects = this._game.getObjects();
			if (objects){
				objects.forEach(object => {
					if (object.objectType === EObjectType.BULLET) {
						(object as BulletObject).move();
					} else if (object.objectType === EObjectType.ANIMATION) {
						let animation = object as AnimationObject;
						if (animation.expireTime < this._fps.now) {
							animation.expire();
						}
						
						if (animation.animationType === EAnimationType.INVINCIBLE) {
							let tankSize = getSpriteData(this._game.mainTank).size;
							animation.animationPoint = {
								x: mainTank.position.x + tankSize.width / 2,
								y: mainTank.position.y + tankSize.height / 2
							};
						}

						animation.nextSpritePosition();
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
			if (this._game.debug) {
				this.drawDebugCounter(ctx);
			}
		}
	}

	private checkKeyStateSync(): boolean {
		const mainTank = this._game.mainTank;
		const keyState = this._game.keyState;
		if ((keyState.ArrowUp === true && mainTank.direction == EDirection.up) || 
		(keyState.ArrowRight === true && mainTank.direction == EDirection.right) ||
		(keyState.ArrowDown === true && mainTank.direction == EDirection.down) ||
		(keyState.ArrowLeft === true && mainTank.direction == EDirection.left)) {
			return true;
		} else {
			return false;
		}
	}

	//#region drawing methods
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
		ctx.fillRect(0, 0, ctx.canvas.clientWidth, DRAWING_CONST.sizes.frame.top);
		// left
		ctx.fillRect(0, 0, DRAWING_CONST.sizes.frame.left, ctx.canvas.clientHeight);
		// bottom
		ctx.fillRect(0, ctx.canvas.clientHeight - DRAWING_CONST.sizes.frame.bottom, ctx.canvas.clientWidth, DRAWING_CONST.sizes.frame.bottom);
		// right
		ctx.fillRect(ctx.canvas.clientWidth - DRAWING_CONST.sizes.frame.right, 0, DRAWING_CONST.sizes.frame.right, ctx.canvas.clientHeight);
		ctx.restore();

	}

	private drawObjects(ctx: CanvasRenderingContext2D, objects: Array<GameObject>) {
		ctx.save();

		for(let i = 0; i < objects.length; i++) {
			let object = objects[i];
			let sprite = getSpriteData(object);
			
			this.drawObject(ctx, object, sprite);

			if (this._game.debug) {
				ctx.strokeStyle = '#FF0000';
				ctx.strokeRect(
					object.position.x,
					object.position.y,
					sprite.size.width,
					sprite.size.height
				);
				// this.drawText(ctx, `${object.id}`, {
				// 	x: DRAWING_CONST.sizes.frame.left + object.position.x,
				// 	y: DRAWING_CONST.sizes.frame.top + object.position.y - 1,
				// }, sprite.size.width);
			}

			ctx.restore();
		}
	}

	private drawObject(ctx: CanvasRenderingContext2D, object: GameObject, sprite: SpriteDef) {
		if (object.visible === false) {
			return;
		}
		if (sprite != null) {
			if (object.objectType === EObjectType.BLOCK) {
				let block = object as BlockObject;
				let blockState = block.blockState4x4;
				let cellSize = {
					width: sprite.size.width / 4,
					height: sprite.size.width / 4
				} as Size;
				for(let i = 0; i < blockState.length; i++) {
					for(let j = 0; j < blockState[i].length; j++) {
						if (blockState[i][j] === true) {
							ctx.drawImage(
								this._sprite,
								sprite.position.x + cellSize.width * j,
								sprite.position.y + cellSize.height * i,
								cellSize.width,
								cellSize.height,
								object.position.x + cellSize.width * j,
								object.position.y + cellSize.height * i,
								cellSize.width,
								cellSize.height
							)
						}
					}
				}
			} else {
				ctx.drawImage(
					this._sprite,
					sprite.position.x,
					sprite.position.y,
					sprite.size.width,
					sprite.size.height,
					object.position.x,
					object.position.y,
					sprite.size.width,
					sprite.size.height
				);
			}
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
	//#endregion

	//#region public methods
	
	
	/**
	 * Test object is visible
	 * @param object object for test
	 * @param sprite object's sprite data for size
	 */
	public objectVisibleTest(object: GameObject): boolean { 
		let position = object.position;
		let size = getSpriteData(object).size;
		let ctx = this._canvas.getContext('2d');
		if (position.x >= DRAWING_CONST.sizes.frame.left &&
			position.x + size.width <= ctx.canvas.clientWidth - DRAWING_CONST.sizes.frame.right &&
			position.y >= DRAWING_CONST.sizes.frame.top &&
			position.y + size.height <= ctx.canvas.clientHeight - DRAWING_CONST.sizes.frame.bottom 
		) {
			return true;
		} else {
			return false;
		}
	}

	public randomPoint(size: Size): Point {
		return {
			x: getRandomRange(
				DRAWING_CONST.sizes.frame.left,
				this._canvas.width - DRAWING_CONST.sizes.frame.right - size.width),
			y: getRandomRange(
				DRAWING_CONST.sizes.frame.top,
				this._canvas.height - DRAWING_CONST.sizes.frame.bottom - size.height),
		};
	}

	/**
	 * Calculate and return Z-Index for render
	 * 0: Water Block
	 * 1: Tanks, Breakable Blocks
	 * 2: Invincible Animation, Bullets
	 * 3: Bush
	 * 4: Explode Animations, Score Animations, Spawning Animation
	 * 5: Items
	 * 6: System Sprites(Game Over... etc)
	 * @param object object for calculate
	 */
	public getObjectZIndex(object: GameObject): number {
		switch(object.objectType) {
			case EObjectType.BLOCK:
				let block = object as BlockObject;
				if (block.blockType === EBlockType.WATER) {
					return 0;
				} else if (block.blockType === EBlockType.BUSH) {
					return 3;
				} else {
					return 1;
				}
			case EObjectType.TANK:
				return 1;
			case EObjectType.ANIMATION:
				let animation = object as AnimationObject;
				if (animation.animationType === EAnimationType.INVINCIBLE) {
					return 2;
				} else {
					return 4
				}
			case EObjectType.BULLET:
				return 2;
			case EObjectType.ITEM:
				return 5;
		}
	}
	//#endregion
}