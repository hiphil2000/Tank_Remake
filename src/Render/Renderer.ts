import Game from "../Game/Game";
import GameObject from "../Game/Object/GameObject";
import EObjectType from "../Game/Object/Enum/EObjectType";
import SPRTIE_DEF, { SpriteDef } from "./Sprite/SpriteDefinition";
import TankObject from "../Game/Object/TankObject";
import BulletObject from "../Game/Object/BulletObject";
import AnimationObject from "../Game/Object/AnimationObject";
import EAnimationType, { AnimationDefaults } from "../Game/Object/Enum/EAnimationType";
import BlockObject from "../Game/Object/BlockObject";
import ItemObject from "../Game/Object/ItemObject";
import { getSpriteData, getSystemSprite, getSpriteSize, getObjectSize, getAnimationSize } from "./Sprite/SpriteData";
import EDirection from "../Utils/EDirection";
import { Point, Size } from "../Utils/UnitTypes";
import { getRandomRange } from "../Utils/Utils";
import EMenuType from "../Game/Menu/EMenuType";
import ESystemSprite from "./Sprite/ESystemSprite";
import EBlockType from "../Game/Object/Enum/EBlockType";
import ETankType from "../Game/Object/Enum/ETankType";
import TankAIOBject from "../Game/Object/TankAIObject";

import "../Resources/PixelEmulator-xq08.ttf";

export const MAX_FPS = 60;
export const MENU_MAX_FPS = 30;
export const DRAWING_CONST = {
	colors: {
		background: "#000000",
		background_frame: "#636362",

	},
	sizes: {
		frame: {
			left: 32,
			top: 32,
			bottom: 32,
			right: SPRTIE_DEF.SYSTEM.FRAME.size.width
		},
		screen: {
			width: 32 * 13,
			height: 32 * 13
		}
	},
	positions: {
		main: {
			cursor_start: 265
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
	public titleShown: boolean;

	private _game: Game;
	private _canvas: HTMLCanvasElement;
	private _mainSprite: HTMLImageElement;
	private _titleSprite: HTMLImageElement;

	private _fps = {
		fpsInterval: 1000 / MAX_FPS,
		now: performance.now(),
		then: performance.now(),
		elapsed: 0
	};
	
	constructor(game: Game, canvas: HTMLCanvasElement, sprite_main_src: string, sprite_title_src: string) {
		if (canvas == undefined) {
			throw 'canvas is null or undefined';
		}
		this._canvas = canvas;

		if (game == undefined) {
			throw 'game is null or undefined';
		}
		this._game = game;
		
		this.initScreen();
		this.loadSprite(sprite_main_src, sprite_title_src);
	}

	private loadSprite(mainSrc: string, titleSrc: string) {
		this._mainSprite = new Image();
		this._titleSprite = new Image();
		this._mainSprite.onload = () => {
			this._titleSprite.src = titleSrc;
		}
		this._titleSprite.onload = () => {
			this.render();
		}
		this._mainSprite.src = mainSrc;
	}

	private initScreen() {
		const sizes = DRAWING_CONST.sizes;
		this._canvas.width = sizes.frame.left + sizes.frame.right + sizes.screen.width;
		this._canvas.height = sizes.frame.top + sizes.frame.bottom + sizes.screen.height;
	}

	private render() {
		requestAnimationFrame(() => {this.render();});
		let fps = this._fps;

		fps.now = performance.now();
		fps.elapsed = fps.now - fps.then;

		if (fps.elapsed > fps.fpsInterval) {
			fps.then = fps.now - (fps.elapsed % fps.fpsInterval);
			
			// start drawing
			// get context
			let ctx = this._canvas.getContext('2d');
			ctx.save();

			// clear screen
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			// draw backgrounds
			this.drawBackground(ctx);
			
			switch(this._game.currentMenu) {
				case EMenuType.MAIN:
					this.renderMain(ctx);
					break;
				case EMenuType.GAME:
					this.renderGame(ctx);
					break;
				case EMenuType.STAGE:
					this.renderStage(ctx);
					break;
				case EMenuType.CONSTRUCT:
					break;
			}

			// draw debug counter
			if (this._game.debug) {
				this.drawDebugCounter(ctx);
			}
		}
	}

	/**
	 * render main screen
	 * @param ctx context
	 */
	private renderMain(ctx: CanvasRenderingContext2D) {
		this.processMain();
		this.drawObjects(ctx, this._game.objects);
	}

	/**
	 * process main screen actions
	 */
	private processMain() {
		const objects = this._game.objects;
		if (objects != undefined) {
			objects.forEach(object => {
				const position = object.position;
				switch(object.objectType) {
					case EObjectType.ANIMATION:
						const animation = object as AnimationObject;
						const animationPoint = animation.animationPoint;
						const animationSize = getAnimationSize(animation.animationType, animation.spritePosition);
						switch(animation.animationType) {
							case EAnimationType.TITLE:
								if (position.y > 0) {
									position.y = position.y - 2;
									animationPoint.y = position.y + animationSize.height / 2;
								} else if (this.titleShown === false) {
									position.y = 0;
									animationPoint.y = position.y + animationSize.height / 2;
									animation.expire(false);
									this.titleShown = true;
								}
								break;
							case EAnimationType.CURSOR:
								const cursorIndex = this._game.cursorIndex;
								const cursorStart = DRAWING_CONST.positions.main.cursor_start;
								animationPoint.y = cursorStart + 
									cursorIndex * animationSize.height +
									animationSize.height / 2
								break;
						}
						animation.nextSpritePosition();
						break;
				}
			});
		}
	}

	/**
	 * render game screen
	 * @param ctx context
	 */
	private renderGame(ctx: CanvasRenderingContext2D) {
		// process actions
		this.processGame();

		// draw frame
		this.drawFrame(ctx);

		// draw objects
		this.drawObjects(ctx, this._game.objects);
	}

	/**
	 * process all game actions
	 */
	private processGame() {
		if (this._game.pause == true) {
			return;
		}

		const mainTank = this._game.mainTank;
		if (mainTank != null) {
			if (mainTank.visible === true && this.checkKeyStateSync()) {
				mainTank.move();
			}
		}
	
		if (this._game.enemyPauseExpire < this._fps.now) {
			this._game.setEnemyPause(false);
		}

		const objects = this._game.objects;
		if (objects != undefined) {
			objects.forEach(object => {
				switch(object.objectType) {
					case EObjectType.BULLET:
						(object as BulletObject).move();
						break;
					case EObjectType.ANIMATION:
						const animation = object as AnimationObject;
						if (animation.expireTime < this._fps.now) {
							animation.expire();
						}

						const animationPoint = animation.animationPoint;
						const animationSize = getAnimationSize(animation.animationType, animation.spritePosition);
						switch(animation.animationType) {
							case EAnimationType.INVINCIBLE:
								const tankSize = getObjectSize(EObjectType.TANK);
								animationPoint.x = mainTank.position.x + tankSize.width / 2;
								animationPoint.y = mainTank.position.y + tankSize.height / 2;
								break;
							case EAnimationType.GAMEOVER:
								if (animationPoint.y >= this._canvas.clientHeight / 2 + animationSize.height / 2) {
									animationPoint.y = animationPoint.y - 2;
								}
								break;
						}
						animation.nextSpritePosition();
						break;
					case EObjectType.TANK:
						const tank = object as TankObject;
						if (tank instanceof TankAIOBject) {
							const enemy = tank as TankAIOBject;
							const definition = enemy.getColorDefinition();
							if (this._fps.now - enemy.lastChanged > definition.delay) {
								enemy.nextColorIndex();
								enemy.lastChanged = this._fps.now;
							}

							if (tank.visible && this._game.enemyPause == false) {
								tank.action();
							}
						}
						break;
				}
			})
		}

		this._game.spawnTank(ETankType.ENEMY_TANK);
	}

	private renderStage(ctx: CanvasRenderingContext2D) {
		this.drawCurtain(ctx);
	}

	private drawCurtain(ctx: CanvasRenderingContext2D) {
		ctx.save()
		const objects = this._game.objects;
		objects.forEach(object => {
			switch(object.objectType) {
				case EObjectType.ANIMATION:
					const animation = object as AnimationObject;
					switch(animation.animationType) {
						case EAnimationType.CURTAIN:
							const defaults = AnimationDefaults.CURTAIN;
							const original_start = animation.expireTime - defaults.duration;
							const elapsed = this._fps.now - original_start;
							const progress = elapsed / defaults.duration;
							const screen = {
								width: ctx.canvas.clientWidth,
								height: ctx.canvas.clientHeight
							}
							ctx.fillStyle = DRAWING_CONST.colors.background_frame;
							if (progress < .25) {
								ctx.fillRect(
									0,
									0,
									screen.width,
									screen.height * progress * 2
								);
								ctx.fillRect(
									0,
									screen.height / 2 + screen.height / 2 - screen.height * progress * 2,
									screen.width,
									screen.height * progress * 2
								);
							} else if (progress < .75) {
								ctx.fillRect(
									0,
									0,
									screen.width,
									screen.height
								);
								this.drawStageNumber(ctx, this._game.gameData.levelData.levelId as number)
							} else if (progress < 1) {
								let closingProgress = progress - .75;
								ctx.fillStyle = DRAWING_CONST.colors.background_frame;
								ctx.fillRect(
									0,
									0,
									screen.width,
									screen.height / 2 - (screen.height * (closingProgress * 2))
								);
								ctx.fillRect(
									0,
									screen.height / 2 + (screen.height * (closingProgress * 2)),
									screen.width,
									screen.height
								);
							} else {
								animation.expire();
							}
							ctx.restore();
							break;
					}
					break;
			}
		})
	}

	private drawStageNumber(ctx: CanvasRenderingContext2D, number: number) {
		const stage = SPRTIE_DEF.SYSTEM.STAGE;
		const numbers = [];
		const number_str = number.toString();
		for(let i = number_str.length -1; i >= 0; i--) {
			numbers.push(SPRTIE_DEF.SYSTEM.NUMBER[parseInt(number_str.charAt(i))]);
		}

		ctx.drawImage(
			this._mainSprite,
			stage.position.x,
			stage.position.y,
			stage.size.width,
			stage.size.height,
			ctx.canvas.clientWidth / 2 - stage.size.width * (4 / 5),
			ctx.canvas.clientHeight / 2 - stage.size.height,
			stage.size.width,
			stage.size.height
		);
		

		numbers.forEach((number, index) => {
			ctx.drawImage(
				this._mainSprite,
				number.position.x,
				number.position.y,
				number.size.width,
				number.size.height,
				ctx.canvas.clientWidth / 2 + number.size.width * (4 - index - 1),
				ctx.canvas.clientHeight / 2 - number.size.height,
				number.size.width,
				number.size.height
			);
		})
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
			0,
			0,
			ctx.canvas.clientWidth,
			ctx.canvas.clientHeight
		);
		ctx.restore();
	}

	private drawFrame(ctx: CanvasRenderingContext2D) {
		const FRAME = DRAWING_CONST.sizes.frame;
		const SPRITE_FRAME = getSystemSprite(ESystemSprite.FRAME);
		const SPRITE_TANK_ICON = getSystemSprite(ESystemSprite.TANK_ICON);

		ctx.save();

		ctx.fillStyle = DRAWING_CONST.colors.background_frame;
		// top
		ctx.fillRect(0, 0, ctx.canvas.clientWidth, FRAME.top);
		// left
		ctx.fillRect(0, 0, FRAME.left, ctx.canvas.clientHeight);
		// bottom
		ctx.fillRect(0, ctx.canvas.clientHeight - FRAME.bottom, ctx.canvas.clientWidth, FRAME.bottom);
		// right
		ctx.fillRect(ctx.canvas.clientWidth - FRAME.right, 0, FRAME.right, ctx.canvas.clientHeight);

		this.drawSprite(
			ctx,
			SPRITE_FRAME, 
			{ x: ctx.canvas.clientWidth - FRAME.right, y: 0 }
		)

		// enemy tank left
		const groups = this._game.gameData.levelData.tanks;
		let tankCount = 0;
		groups.forEach(group => {
			tankCount += group.DEFAULT + group.SPEED + group.POWER + group.ARMOURED;
		});
		for(let i = 0; i < 10; i++) {
			for(let j = 0; j < 2; j++) {
				if (tankCount > 0) {
					this.drawSprite(
						ctx,
						SPRITE_TANK_ICON,
						{
							x: ctx.canvas.clientWidth - FRAME.right + 16 * (j + 1),
							y: 48 + 16 * i
						}
					);
				} else {
					ctx.fillRect(
						ctx.canvas.clientWidth - FRAME.right + 16 * (j + 1),
						48 + 16 * i,
						16,
						16
					);
				}
				tankCount--;
			}
		}

		// P1 life
		this.drawSprite(
			ctx,
			getSystemSprite(ESystemSprite.NUMBER, this._game.gameData.playerData[0].life),
			{ x: ctx.canvas.clientWidth - FRAME.right + 32, y: 288 }
		);

		// P2 life
		if (this._game.gameData.playerData.length > 1) {
			this.drawSprite(
				ctx,
				getSystemSprite(ESystemSprite.NUMBER, this._game.gameData.playerData[1].life),
				{ x: ctx.canvas.clientWidth - FRAME.right + 32, y: 336 }
			);
		} else {
			ctx.fillRect(ctx.canvas.clientWidth - FRAME.right + 16, 320, 32, 32);
		}

		const levelId = this._game.gameData.levelData.levelId
		const levelType = typeof(levelId);
		if (levelType === 'number') {
			if (Math.floor(levelId as number / 10) === 0) {
				ctx.fillRect(ctx.canvas.clientWidth - FRAME.right + 16, 400, 16, 16);
			} else {
				this.drawSprite(
					ctx,
					getSystemSprite(ESystemSprite.NUMBER, Math.floor(levelId as number / 10)),
					{ x: ctx.canvas.clientWidth - FRAME.right + 16, y: 400 }
				);
			}
			
			this.drawSprite(
				ctx,
				getSystemSprite(ESystemSprite.NUMBER, levelId as number % 10),
				{ x: ctx.canvas.clientWidth - FRAME.right + 32, y: 400 }
			);

		} else if (levelType === 'string') {
			ctx.fillStyle = DRAWING_CONST.colors.background_frame;
		}

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
					object.position.x + 1,
					object.position.y + 1,
					sprite.size.width - 2,
					sprite.size.height - 2
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
		let sprite_src = this._mainSprite;
		if (object.visible == false) {
			return;
		}
		if (object.objectType === EObjectType.ANIMATION) {
			const animation = object as AnimationObject;
			if (animation.animationType === EAnimationType.TITLE) {
				sprite_src = this._titleSprite;
			}
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
								sprite_src,
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
					sprite_src,
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

	private drawSprite(ctx: CanvasRenderingContext2D, sprite: SpriteDef, position: Point, size?: Size) {
		ctx.save()
		ctx.drawImage(
			this._mainSprite,
			sprite.position.x,
			sprite.position.y,
			sprite.size.width,
			sprite.size.height,
			position.x,
			position.y,
			size != undefined ? size.width : sprite.size.width,
			size != undefined ? size.height : sprite.size.height
		);
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
	public static getObjectZIndex(object: GameObject): number {
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
				const animation = object as AnimationObject;
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