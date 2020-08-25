import Renderer from "../Render/Renderer";
import IGameData from "./GameData/IGameData";
import GameObject from "./Object/GameObject";
import TankObject, { ETankColor } from "./Object/TankObject";
import EGameType from "./GameData/EGameType";
import ILevel from "./Level/ILevel";
import EDirection, { EDirectionToEKeys } from "../Utils/EDirection";
import IKeyState from "./InputManage/IKeyState";
import EKeys, { EKeysToEDirection } from "./InputManage/EKeys";
import SPRTIE_DEF, { SpriteDef } from "../Render/Sprite/SpriteDefinition";
import EObjectType from "./Object/EObjectType";
import BulletObject from "./Object/BulletObject";

export const MAIN_TANK_ID = 'MAIN';

export default class Game {
	private _renderer: Renderer;
	private _gameData: IGameData;
	private _keyState: IKeyState;

	constructor(screen: HTMLCanvasElement, spriteSrc: string) {
		this._renderer = new Renderer(this, screen, spriteSrc);
		this.initializeInputs();
		screen.focus();
		
		this.newGame(EGameType.PVE, null, []);
		// this.showTitle();
	}
	
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
					break;
				case EKeys.esc:
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
	//#endregion

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
	
	//#region game object methods

	public insertObject(object: GameObject) {
		if (this._gameData == null || this._gameData.objects == null) {
			return;
		}

		this._gameData.objects.push(object);
	}

	public removeObject(object: GameObject) {
		if (this._gameData == null && this._gameData.objects == null) {
			return;
		}
		let idx = this._gameData.objects.indexOf(object);
		this._gameData.objects.splice(idx, 1);
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
			let spriteData = this._renderer.getSpriteData(item);

			let test = this._renderer.rectangleCollisionTest(object, objectSprite, item, spriteData);

			if (test) {
				found.push(item);
			}
		})

		return found;
	}

	//#region renderer porting method
	/**
	 * Test object is visible (Port of Renderer.testVisibility)
	 * @param object object for test
	 * @param sprite object's sprite data for size
	 */
	public testVisibility(object: GameObject, sprite: SpriteDef): boolean {
		return this._renderer.testVisibility(object, sprite);
	}

	/**
	 * Find sprite data for given object (Port of Renderer.testVisibility)
	 * @param object found sprite definition
	 */
	public getSprite(object: GameObject): SpriteDef {
		return this._renderer.getSpriteData(object);
	}
	//#endregion
	//#endregion

	public newGame(gameType: EGameType, level: ILevel, objects: Array<GameObject>) {
		this._gameData = {
			gameType: gameType,
			levelData: level,
			objects: objects
		} as IGameData
		
		if (this.mainTank) {
			this.removeObject(this.mainTank);
		}

		this.insertObject(new TankObject(
			this,
			this._renderer.randomPoint({width: 32, height: 32}),
			EDirection.right,
			ETankColor.WHITE,
			3,
			MAIN_TANK_ID
		));
	}
	//#endregion
}