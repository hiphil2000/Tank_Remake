import Renderer from "../Render/Renderer";
import IGameData from "./GameData/IGameData";
import GameObject from "./Object/GameObject";
import TankObject, { ETankColor } from "./Object/TankObject";
import EGameType from "./GameData/EGameType";
import ILevel from "./Level/ILevel";
import EDirection from "../Utils/EDirection";
import IKeyState from "./InputManage/IKeyState";
import EKeys, { EKeysToEDirection } from "./InputManage/EKeys";
import { SpriteDef } from "../Render/Sprite/SpriteDefinition";
import EObjectType from "./Object/EObjectType";
import BulletObject from "./Object/BulletObject";
import { Point } from "../Utils/UnitTypes";
import AnimationObject from "./Object/AnimationObject";
import EAnimationType, { AnimationValue, AnimationDefaults } from "./Object/EAnimationType";
import BlockObject from "./Object/BlockObject";

export const MAIN_TANK_ID = 'MAIN';

export default class Game {
	public debug: boolean;
	private _renderer: Renderer;
	private _gameData: IGameData;
	private _keyState: IKeyState;

	constructor(screen: HTMLCanvasElement, spriteSrc: string, debug?: boolean) {
		this.debug = debug;
		this._renderer = new Renderer(this, screen, spriteSrc);
		this.initializeInputs();
		screen.focus();
		
		this.newGame(EGameType.PVE, null, []);
		// this.showTitle();
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
	
	get isTankMoveReady(): boolean {
		let mainTank = this.mainTank;
		if (mainTank == null) {
			return false;
		}
		if ((this._keyState.ArrowUp === true && mainTank.direction == EDirection.up) || 
		(this._keyState.ArrowRight === true && mainTank.direction == EDirection.right) ||
		(this._keyState.ArrowDown === true && mainTank.direction == EDirection.down) ||
		(this._keyState.ArrowLeft === true && mainTank.direction == EDirection.left))
		{
			return true;
		}
	}
	//#endregion
	
	//#region public methods
	//#region menu methods
	public showTitle() {
		
	}
	
	public showMenu() {
		
	}
	//#endregion
	
	public log(msg: string): void {
		if (this.debug) {
			console.log(`[${performance.now()}] ${msg}`);
		}
	}

	//#region game object methods

	public insertObject(object: GameObject) {
		if (this._gameData == null || this._gameData.objects == null) {
			return;
		}

		this._gameData.objects.push(object);

		this.sortObject();
	}

	public removeObject(object: GameObject) {
		if (this._gameData == null && this._gameData.objects == null) {
			return;
		}
		let idx = this._gameData.objects.indexOf(object);
		this._gameData.objects.splice(idx, 1);
		
		this.sortObject();
	}

	private sortObject() {
		if (this._gameData == null || this._gameData.objects == null) {
			return;
		}

		this._gameData.objects.sort((obj1, obj2) => {
			let zindex1 = this.getObjectZIndex(obj1);
			let zindex2 = this.getObjectZIndex(obj2);

			return zindex1 - zindex2;
		});
	}

	public getObjects(): Array<GameObject> {
		if (this._gameData?.objects == undefined) {
			return null;
		} else {
			return this._gameData.objects;
		}
	}

	public findObjectById(id: string): Array<GameObject> {
		if (this._gameData.objects != undefined) {
			return this._gameData.objects.filter(object => {return object.id === id});
		} else {
			return [];
		}
	}

	public collisionTest(object: GameObject): Array<GameObject> {
		let found: Array<GameObject> = [];

		if (this._gameData == null || this._gameData.objects == null) {
			return found;
		}

		let objectSprite = this._renderer.getSpriteData(object);

		this._gameData.objects.forEach(item => {
			if (item.objectType === EObjectType.ANIMATION) {
				return;
			}

			if (item.objectType === EObjectType.BLOCK) {
				let blockType = (item as BlockObject).blockType;
				if ((object.objectType === EObjectType.TANK || object.objectType === EObjectType.BULLET) && blockType === EBlockType.BUSH) {
					return;
				}
				if (object.objectType === EObjectType.BULLET && blockType === EBlockType.WATER) {
					return
				}
			}

			if (item.objectType === EObjectType.TANK) {
				if (object.objectType === EObjectType.BULLET) {
					if (item.id === (object as BulletObject).parentId) {
						return;
					}
				}
			}

			if (item.objectType === EObjectType.BULLET) {
				if (object.objectType === EObjectType.TANK) {
					return;
				}
			}

			let spriteData = this._renderer.getSpriteData(item);

			let test = this._renderer.rectangleCollisionTest(object, objectSprite, item, spriteData);

			if (item != object && test) {
				found.push(item);
			}
		})

		return found;
	}

	public startAnimation(target: Point|GameObject, animationType: EAnimationType, animationValue?: AnimationValue, callback?: (animation: AnimationObject) => void) {
		let animationPoint: Point;
		if (target instanceof GameObject) {
			let object = target as GameObject;
			let size = this.getSprite(object).size;
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
			this, animationType,
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
	public testVisibility(object: GameObject, sprite: SpriteDef): boolean {
		return this._renderer.testVisibility(object, sprite);
	}

	/**
	 * Find sprite data for given object (Port of Renderer.getSprite)
	 * @param object found sprite definition
	 */
	public getSprite(object: GameObject): SpriteDef {
		return this._renderer.getSpriteData(object);
	}

	/**
	 * Calculate and return Z-Index for render (Port of Renderer.getObjectZIndex)
	 * @param object sprite for calculate
	 */
	public getObjectZIndex(object: GameObject): number {
		return this._renderer.getObjectZIndex(object);
	}
	//#endregion
	//#endregion

	public newGame(gameType: EGameType, level: ILevel, objects: Array<GameObject>) {
		this._gameData = {
			gameType: gameType,
			levelData: level,
			objects: objects
		} as IGameData

		this.createMainTank(
			this._renderer.randomPoint({width: 32, height: 32}),
			EDirection.up,
			ETankColor.YELLOW,
			0
		);
		
		this.insertObject(
			new BlockObject(
				this,
				EBlockType.BRICK,
				{ x: 3 * 32, y: 5 * 32 },
				{
					bottomLeft: true,
					bottomRight: true,
					topLeft: true,
					topRight: true
				}
			)
		)
		
		this.insertObject(
			new BlockObject(
				this,
				EBlockType.IRON,
				{ x: 3 * 32, y: 6 * 32 },
				{
					bottomLeft: true,
					bottomRight: true,
					topLeft: true,
					topRight: true
				}
			)
		)

		this.insertObject(
			new BlockObject(
				this,
				EBlockType.WATER,
				{ x: 3 * 32, y: 7 * 32 },
				{
					bottomLeft: true,
					bottomRight: true,
					topLeft: true,
					topRight: true
				}
			)
		)

		this.insertObject(
			new BlockObject(
				this,
				EBlockType.BUSH,
				{ x: 3 * 32, y: 8 * 32 },
				{
					bottomLeft: true,
					bottomRight: true,
					topLeft: true,
					topRight: true
				}
			)
		)
	}
	//#endregion
	
	//#region private methods
	private initializeInputs() {
		this._keyState = {} as IKeyState;
		document.addEventListener('keydown', ev => {
			let mainTank = this.mainTank;
			switch (ev.code) {
				case EKeys.arrow_up:
				case EKeys.arrow_right:
				case EKeys.arrow_down:
				case EKeys.arrow_left:
					if (mainTank) {
						mainTank.direction = EKeysToEDirection(ev.code as EKeys);
					}
					this.resetArrowInput();
					this._keyState[ev.code] = true;
					break;
				case EKeys.spacebar:
					if (mainTank) {
						mainTank.fire();
					}
					this._keyState[ev.code] = true;
					break;
				case EKeys.esc:
					this._keyState[ev.code] = true;
					break;
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

	private createMainTank(position: Point, direction: EDirection, tankColor: ETankColor, tankLevel: number) {
		if (this.mainTank) {
			this.removeObject(this.mainTank);
		}

		this.insertObject(new TankObject(
			this,
			position,
			direction,
			tankColor,
			tankLevel,
			MAIN_TANK_ID
		));
		this.mainTank.invincible();
	}
	//#endregion
	
}