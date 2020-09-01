import Renderer, { DRAWING_CONST } from "../Render/Renderer";
import IGameData from "./GameData/IGameData";
import GameObject from "./Object/GameObject";
import TankObject, { ETankColor } from "./Object/TankObject";
import EGameType from "./GameData/EGameType";
import ILevel from "./Level/ILevel";
import EDirection from "../Utils/EDirection";
import { BlockCollisionTest, ObjectCollisionTest, RectangleCollisionTest } from "../Utils/CollisionTest";
import IKeyState from "./InputManage/IKeyState";
import EKeys, { EKeysToEDirection } from "./InputManage/EKeys";
import SPRTIE_DEF, { SpriteDef } from "../Render/Sprite/SpriteDefinition";
import EObjectType from "./Object/Enum/EObjectType";
import BulletObject from "./Object/BulletObject";
import { Point } from "../Utils/UnitTypes";
import AnimationObject from "./Object/AnimationObject";
import EAnimationType, { AnimationValue, AnimationDefaults } from "./Object/Enum/EAnimationType";
import BlockObject from "./Object/BlockObject";
import ItemObject from "./Object/ItemObject";
import EItemType from "./Object/Enum/EItemType";
import ETankType from "./Object/Enum/ETankType";
import MovingObject from "./Object/MovingObject";
import { getSpriteData, getSpriteSize } from "../Render/Sprite/SpriteData";
import EMenuType from "./Menu/EMenuType";
import EBlockType from "./Object/Enum/EBlockType";
import DefaultLevels from "./Level/DefaultLevels";


export const MAIN_TANK_ID = 'MAIN';
export const TITLE_ID = 'TITLE';

export default class Game {
	public debug: boolean;
	private _renderer: Renderer;
	private _gameData: IGameData;
	private _objects: Array<GameObject>;
	private _keyState: IKeyState;
	private _pause: boolean;

	private _currentMenu: EMenuType;
	private _cursorIndex: number;

	constructor(screen: HTMLCanvasElement, sprite_main_src: string, sprite_title_src: string, debug?: boolean) {
		this.debug = debug;
		this._objects = [];
		this._pause = false;
		this._renderer = new Renderer(this, screen, sprite_main_src, sprite_title_src);
		this.initializeInputs();
		screen.focus();
		this.showTitle();
	}

	//#region getter and setter
	get keyState(): IKeyState {
		return this._keyState;
	}
	
	get mainTank(): TankObject {
		let found = this.findObjectById(MAIN_TANK_ID);
		if (found.length > 0) {
			return found[0] as TankObject;
		} else {
			return null;
		}
	}

	get pause(): boolean {
		return this._pause;
	}

	get gameData(): IGameData {
		return this._gameData;
	}

	get currentMenu(): EMenuType {
		return this._currentMenu;
	}

	get cursorIndex(): number {
		return this._cursorIndex;
	}
	//#endregion
	
	//#region public methods
	
	//#region debug methods
	public log(msg: string): void {
		if (this.debug) {
			console.log(`[${performance.now()}] ${msg}`);
		}
	}
	//#endregion
	
	//#region game object methods

	public insertObject(object: GameObject) {
		this._objects.push(object);

		this.sortObject();
	}

	public removeObject(object: GameObject) {
		let idx = this._objects.indexOf(object);
		this._objects.splice(idx, 1);
		
		this.sortObject();
	}

	private sortObject() {
		if (this._gameData == null || this._objects == null) {
			return;
		}

		this._objects.sort((obj1, obj2) => {
			let zindex1 = Renderer.getObjectZIndex(obj1);
			let zindex2 = Renderer.getObjectZIndex(obj2);

			return zindex1 - zindex2;
		});
	}

	public getObjects(): Array<GameObject> {
		return this._objects;
	}

	public findObjectById(id: string): Array<GameObject> {
		return this._objects.filter(object => {return object.id === id});
	}

	public collisionTest(object: GameObject): Array<GameObject> {
		let found: Array<GameObject> = [];

		if (this._gameData == null || this._objects == null) {
			return found;
		}

		this._objects.forEach(item => {
			if (item == object) {
				return;
			}

			if (item.objectType === EObjectType.ANIMATION) {
				return;
			} else if (item.objectType === EObjectType.BLOCK) {
				let blockType = (item as BlockObject).blockType;
				if ((object.objectType === EObjectType.TANK || object.objectType === EObjectType.BULLET) && blockType === EBlockType.BUSH) {
					return;
				}
				if (object.objectType === EObjectType.BULLET && blockType === EBlockType.WATER) {
					return
				}
			} else if (item.objectType === EObjectType.TANK) {
				if (object.objectType === EObjectType.BULLET) {
					if (item.id === (object as BulletObject).parentId) {
						return;
					}
				}
			} else if (item.objectType === EObjectType.BULLET) {
				if (object.objectType === EObjectType.TANK) {
					return;
				}
			} else if (item.objectType === EObjectType.ITEM) {
				if (object.objectType === EObjectType.BULLET) {
					return;
				}
			}

			let test = false;
			if (item.objectType === EObjectType.BLOCK) {
				test = BlockCollisionTest(item as BlockObject, object).length > 0;
			} else {
				test = ObjectCollisionTest(object, item);
			}

			if (test === true) {
				found.push(item);
			}
		})

		return found;
	}

	public startAnimation(target: Point|GameObject, animationType: EAnimationType, animationValue?: AnimationValue, callback?: (animation: AnimationObject) => void) {
		let animationPoint: Point;
		if (target instanceof GameObject) {
			let object = target as GameObject;
			let size = getSpriteData(object).size;
			animationPoint = {
				x: object.position.x + size.width / 2,
				y: object.position.y + size.height / 2
			};
		} else {
			animationPoint = target;
		}

		if (animationValue == undefined) {
			animationValue = AnimationDefaults[animationType];
		}

		let animation = new AnimationObject(
			this, null, animationType,
			animationPoint,
			animationValue.duration,
			animationValue.frameRate,
			animationValue.loop,
			callback
		);
		this.insertObject(animation);
	}

	//#region renderer porting methods
	/**
	 * Test object is visible (Port of Renderer.testVisibility)
	 * @param object object for test
	 * @param sprite object's sprite data for size
	 */
	public testVisibility(object: GameObject): boolean {
		return this._renderer.objectVisibleTest(object);
	}
	//#endregion
	//#endregion

	public newGame(gameType: EGameType, level: ILevel) {
		this._currentMenu = EMenuType.GAME;
		this._objects = [];
		this._gameData = {
			gameType: gameType,
			levelData: level,
			life: 5
		} as IGameData

		this.spawnTank(ETankType.PLAYER_TANK, true);
		
		level.blocks.forEach(block => {
			this.insertObject(
				new BlockObject(
					this,
					block.type,
					{
						x: DRAWING_CONST.sizes.frame.left + block.position.x * 32,
						y: DRAWING_CONST.sizes.frame.top + block.position.y * 32
					},
					block.blockState
				)
			)
		})

		this.insertObject(
			new ItemObject(
				this,
				EItemType.BOMB,
				{ x: 4 * 32, y: 8 * 32 }
			)
		)

		this.insertObject(
			new ItemObject(
				this,
				EItemType.STAR,
				{ x: 4 * 32, y: 9 * 32 }
			)
		)
	}

	public spawnTank(tankType: ETankType, freeSpawn: boolean = false) {
		if (tankType === ETankType.PLAYER_TANK) {
			if (this._gameData.life <= 0) {
				return;
			}
			this.createPlayerTank(
				// this._renderer.randomPoint({width: 32, height: 32}),
				{
					x: DRAWING_CONST.sizes.frame.left + 4 * 32,
					y: DRAWING_CONST.sizes.frame.top + 12 * 32
				},
				EDirection.right,
				ETankColor.YELLOW,
				0
			);
			if (freeSpawn === false) {
				this._gameData.life--;
			}
		} else if (tankType === ETankType.ENEMY_TANK) {
			this.createEnemyTank(
				this._renderer.randomPoint({width: 32, height: 32}),
				EDirection.up
			)
		}
	}

	public setPause() {
		this._pause = true;
		const FRAME = DRAWING_CONST.sizes.frame;
		const SCREEN = DRAWING_CONST.sizes.screen;
		this.startAnimation(
			{
				x: FRAME.left + SCREEN.width / 2,
				y: (FRAME.top + FRAME.bottom + SCREEN.height) / 2 + SPRTIE_DEF.ANIMATION.PAUSE[0].size.height / 2
			},
			EAnimationType.PAUSE,
		)
	}

	public gameover() {
		if (this.gameData.gameOver) {
			return;
		}
		this.gameData.gameOver = true;
		const FRAME = DRAWING_CONST.sizes.frame;
		const SCREEN = DRAWING_CONST.sizes.screen;
		this.startAnimation(
			{
				x: FRAME.left + SCREEN.width / 2,
				y: FRAME.top + FRAME.bottom + SCREEN.height
			},
			EAnimationType.GAMEOVER,
			null, () => {
				this.showResultScreen();
			}
		);
	}

	public showResultScreen() {

	}

	public showTitle() {
		this._currentMenu = EMenuType.MAIN;
		this._objects = [];
		this._cursorIndex = 0;
		const FRAME = DRAWING_CONST.sizes.frame;
		const SCREEN = DRAWING_CONST.sizes.screen;
		this.startAnimation(
			{
				x: (FRAME.left + SCREEN.width + FRAME.right) / 2,
				y: (FRAME.top + SCREEN.width + FRAME.bottom) * 1.5
			},
			EAnimationType.TITLE,
			null,
			() => {
				this.startAnimation(
					{
						x: 129 + 16,
						y: 265 + this._cursorIndex * 32 + 16
					},
					EAnimationType.CURSOR
				)
			}
		)
	}
	//#endregion
	
	//#region private methods
	private initializeInputs() {
		this._keyState = {} as IKeyState;
		document.addEventListener('keydown', ev => {
			let mainTank = this.mainTank;
			if (this._currentMenu === EMenuType.GAME) {
				switch (ev.code) {
					case EKeys.arrow_up:
					case EKeys.arrow_right:
					case EKeys.arrow_down:
					case EKeys.arrow_left:
						ev.preventDefault();
						if (mainTank) {
							mainTank.direction = EKeysToEDirection(ev.code as EKeys);
						}
						this.resetArrowInput();
						this._keyState[ev.code] = true;
						break;
					case EKeys.spacebar:
						ev.preventDefault();
						if (mainTank) {
							mainTank.fire();
						}
						this._keyState[ev.code] = true;
						break;
					case EKeys.esc:
						ev.preventDefault();
						this._keyState[ev.code] = true;
						if (this.gameData.gameOver == false) {
							if (this.pause) {
								this._pause = false;
							} else {
								this.setPause();
							}	
						}
						break;
				}
			} else if (this._currentMenu === EMenuType.MAIN) {
				switch (ev.code) {
					case EKeys.arrow_up:
						ev.preventDefault();
						if (this._objects.length > 1) {
							this._cursorIndex = this._cursorIndex - 1 < 0 ?
								2 : 
								this._cursorIndex - 1;
						}
						this.log(`[CURSOR] is now ${this._cursorIndex}`);
						break;
					case EKeys.arrow_down:
						ev.preventDefault();
						if (this._objects.length > 1) {
							this._cursorIndex = this._cursorIndex + 1 > 2 ?
								0 : 
								this._cursorIndex + 1;
						}
						this.log(`[CURSOR] is now ${this._cursorIndex}`);
						break;
					case EKeys.spacebar:
						switch(this._cursorIndex) {
							case 0:
							this.newGame(EGameType.PVE, DefaultLevels[1]);
						}
						break;
				}
			}
			
		});
		document.addEventListener('keyup', ev => {
			let code = ev.code as EKeys;
			this._keyState[code] = false;
		})
	}

	private resetArrowInput() {
		this._keyState.ArrowUp = false;
		this._keyState.ArrowRight = false;
		this._keyState.ArrowDown = false;
		this._keyState.ArrowLeft = false;
	}

	private createPlayerTank(position: Point, direction: EDirection, tankColor: ETankColor, tankLevel: number) {
		if (this.mainTank) {
			this.removeObject(this.mainTank);
		}

		this.insertObject(new TankObject(
			this,
			ETankType.PLAYER_TANK,
			position,
			direction,
			tankColor,
			tankLevel,
			MAIN_TANK_ID
		));
	}

	private createEnemyTank(position: Point, direction: EDirection) {

	}
	//#endregion
	
}