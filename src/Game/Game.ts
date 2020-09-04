import Renderer, { DRAWING_CONST } from "../Render/Renderer";
import IGameData, { IPlayerData } from "./GameData/IGameData";
import GameObject from "./Object/GameObject";
import TankObject, { ETankColor } from "./Object/TankObject";
import EGameType from "./GameData/EGameType";
import ILevel, { getTotalOfTankGroup } from "./Level/ILevel";
import EDirection from "../Utils/EDirection";
import { BlockCollisionTest, ObjectCollisionTest, RectangleCollisionTest } from "../Utils/CollisionTest";
import SPRTIE_DEF from "../Render/Sprite/SpriteDefinition";
import EObjectType from "./Object/Enum/EObjectType";
import BulletObject from "./Object/BulletObject";
import { Point } from "../Utils/UnitTypes";
import AnimationObject from "./Object/AnimationObject";
import EAnimationType, { AnimationValue, AnimationDefaults } from "./Object/Enum/EAnimationType";
import BlockObject from "./Object/BlockObject";
import ETankType, { EnemyType } from "./Object/Enum/ETankType";
import { getSpriteData, getObjectSize, getSpriteSize } from "../Render/Sprite/SpriteData";
import EMenuType from "./Menu/EMenuType";
import EBlockType from "./Object/Enum/EBlockType";
import DefaultLevels from "./Level/DefaultLevels";
import InputManager from "./InputManager/InputManager";
import IKeyState from "./InputManager/IKeyState";
import { getRandomRange, getRandomEnum, deepClone } from "../Utils/Utils";
import TankAIOBject from "./Object/TankAIObject";
import ITankDefinition from "./Level/ITankDefinition";
import EItemType from "./Object/Enum/EItemType";
import ItemObject from "./Object/ItemObject";

export const MAIN_TANK_ID = 'MAIN';
export const MAXIMUM_TANKS = 4;
export const TANK_SPAWN_DELAY = 2500;
export const TANK_SPAWN_POINT = {
	PLAYER_TANK: [
		{ x: 4, y: 12 },
		{ x: 8, y: 12 }
	],
	ENEMY_TANK: [
		{ x: 0, y: 0 },
		{ x: 6, y: 0 },
		{ x: 12, y: 0 }
	]
};

export default class Game {
	public debug: boolean;
	private _pause: boolean;
	private _enemyPause: boolean;

	private _renderer: Renderer;
	private _inputManager: InputManager;
	private _gameData: IGameData;
	private _objects: Array<GameObject>;

	private _currentMenu: EMenuType;
	private _lastSpawn: number;

	constructor(screen: HTMLCanvasElement, sprite_main_src: string, sprite_title_src: string, debug?: boolean) {
		this.debug = debug;
		this._objects = [];
		this._lastSpawn = performance.now();
		this._pause = false;
		this._renderer = new Renderer(this, screen, sprite_main_src, sprite_title_src);
		this._inputManager = new InputManager(this);
		screen.focus();
		this.showTitle();
	}

	//#region getter and setter
	get mainTank(): TankObject {
		let found = this.findObjectById(MAIN_TANK_ID);
		if (found.length > 0) {
			return found[0] as TankObject;
		} else {
			return null;
		}
	}

	get objects(): Array<GameObject> {
		return this._objects;
	}

	get pause(): boolean {
		return this._pause;
	}

	set pause(pause: boolean) {
		this._pause = pause;
	}

	get keyState(): IKeyState {
		return this._inputManager.keyState;
	}

	get gameData(): IGameData {
		return this._gameData;
	}

	get currentMenu(): EMenuType {
		return this._currentMenu;
	}

	get cursorIndex(): number {
		return this._inputManager.cursorIndex;
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
					if (item.visible === false) {
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

	public newGame(playerCount: number, levelId?: number) {
		this._currentMenu = EMenuType.GAME;
		this._objects = [];
		this._gameData = {} as IGameData;

		const gamedata = this._gameData;
		const playerData = new Array<IPlayerData>();
		for(let i = 0; i < playerCount; i++) {
			playerData.push({
				life: 5,
				score: 0,
				destroyedTank: {}
			} as IPlayerData);
		}

		gamedata.gameType = EGameType.PVE;
		gamedata.playerData = playerData;
		gamedata.gameOver = false;

		if (levelId != undefined) {
			this.newLevel(levelId)
		} else {
			if (typeof gamedata.levelData?.levelId === "number") {
				this.newLevel(gamedata.levelData.levelId + 1);
			} else {
				this.newLevel(1);
			}
		}
	}

	public newLevel(levelId: number) {
		this._currentMenu = EMenuType.STAGE;
		this._objects = [];

		this._gameData.levelData = deepClone(DefaultLevels.find(level => {
			return level.levelId === levelId;
		}));
		
		this.showCurtain();

		this.spawnTank(ETankType.PLAYER_TANK, true, 0);
		if (this.gameData.playerData.length > 1) {
			this.spawnTank(ETankType.PLAYER_TANK, true, 1);
		}
		
		this._gameData.levelData.blocks.forEach(block => {
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
		});
	}

	private showCurtain() {
		this._currentMenu = EMenuType.STAGE;
		this._objects = [];
		this.startAnimation(
			{ x: 0, y: 0 },
			EAnimationType.CURTAIN,
			null,
			() => {
				this._currentMenu = EMenuType.GAME;
			}
		)
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
		this._renderer.titleShown = false;
		this._inputManager.initialize();
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
						y: 265 + this.cursorIndex * 32 + 16
					},
					EAnimationType.CURSOR
				)
			}
		)
	}
	//#endregion
	
	//#region private methods
	public spawnTank(tankType: ETankType, freeSpawn: boolean = false, playerIndex?: number) {
		if (tankType === ETankType.PLAYER_TANK) {
			if (this._gameData.playerData[playerIndex].life <= 0) {
				return;
			}
			let tankColor: ETankColor;
			if (playerIndex === 0) {
				tankColor = ETankColor.YELLOW;
			} else {
				tankColor = ETankColor.GREEN;
			}

			const position = TANK_SPAWN_POINT[tankType][playerIndex];
			this.createPlayerTank(
				{
					x: DRAWING_CONST.sizes.frame.left + position.x * getObjectSize(EObjectType.TANK).width,
					y: DRAWING_CONST.sizes.frame.top + position.y * getObjectSize(EObjectType.TANK).height,
				},
				EDirection.up,
				tankColor,
				0
			);
			if (freeSpawn === false) {
				this._gameData.playerData[playerIndex].life--;
			}
		} else if (tankType === ETankType.ENEMY_TANK) {
			const now = performance.now();
			if (now - this._lastSpawn > TANK_SPAWN_DELAY) {
				this._lastSpawn = now;
				const tanks = this._objects.filter(x => {
					return x.objectType === EObjectType.TANK && (x as TankObject).tankType === ETankType.ENEMY_TANK
				});
				if (tanks.length >= MAXIMUM_TANKS) {
					return;
				}

				this.createEnemyTank();
			}
		}
	}

	public spawnItem(itemType?: EItemType, position?: Point) {
		if (itemType == undefined) {
			itemType = getRandomEnum(EItemType);
		}
		if (position == undefined) {
			position = this._renderer.randomPoint(getObjectSize(EObjectType.ITEM));
		}

		this.insertObject(new ItemObject(
			this,
			itemType,
			position
		));
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
		console.log(this.mainTank instanceof TankAIOBject);
	}

	private createEnemyTank() {
		const tankSize = getObjectSize(EObjectType.TANK);
		const spawnPoints = TANK_SPAWN_POINT.ENEMY_TANK;
		const availablePoints: Array<Point> = [];

		const objects = this.objects.filter(object => { return object.objectType === EObjectType.TANK });
		for(let i = 0; i < spawnPoints.length; i++) {
			let success = true;
			for(let j = 0; j < objects.length; j++) {
				if (RectangleCollisionTest(
					this.translateBlockPosition(spawnPoints[i]),
					tankSize,
					objects[j].position,
					tankSize,
				) == true) {
					success = false;
				}
			}
			if (success) {
				availablePoints.push(spawnPoints[i]);
			}
		}
		
		if (availablePoints.length <= 0) {
			this._lastSpawn = performance.now();
			return;
		}
		const idx = getRandomRange(0, availablePoints.length - 1);
		const position = this.translateBlockPosition(availablePoints[idx]);

		const next = this.nextTank();
		if (next == undefined) {
			return;
		}
		this.insertObject(new TankAIOBject(
			this,
			next.type,
			next.item,
			position,
			EDirection.down
		));
	}

	private translateBlockPosition(point: Point): Point {
		const blockSize = getObjectSize(EObjectType.BLOCK);
		return {
			x: DRAWING_CONST.sizes.frame.left + point.x * blockSize.width,
			y: DRAWING_CONST.sizes.frame.top + point.y * blockSize.height
		};
	}

	private nextTank(): ITankDefinition {
		const tankGroups = this._gameData.levelData.tanks;

		let type: EnemyType;
		let sum = 0;
		for(let i = 0; i < tankGroups.length; i++) {
			let total = getTotalOfTankGroup(tankGroups[i]);
			if (total > 0 && type == undefined) {
				const availableTypes: Array<EnemyType> = [];
				Object.values(EnemyType).forEach(type => {
					if (this._gameData.levelData.tanks[i][type] > 0) {
						availableTypes.push(type);
					}
				});
				type = availableTypes[getRandomRange(0, availableTypes.length - 1)];
				this._gameData.levelData.tanks[i][type]--;
			}
			sum += total;
		}

		if (sum > 0) {
			return {
				type: type,
				item: (20 - sum) % 5 === 0 && 20 - sum > 0
			};
		}
	}
	//#endregion
	
}