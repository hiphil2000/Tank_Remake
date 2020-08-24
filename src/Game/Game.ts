import Renderer from "../Render/Renderer";
import IGameData from "./GameData/IGameData";
import GameObject from "./Object/GameObject";
import TankObject, { ETankColor } from "./Object/TankObject";
import EGameType from "./GameData/EGameType";
import ILevel from "./Level/ILevel";
import EDirection, { EDirectionToEKeys } from "../Utils/EDirection";
import IKeyState from "./InputManage/IKeyState";
import EKeys from "./InputManage/EKeys";

export const MAIN_TANK_ID = 'MAIN';

export default class Game {
	private _renderer: Renderer;
	private _gameData: IGameData;
	private _keyState: IKeyState;

	constructor(screen: HTMLCanvasElement) {
		this.newGame(EGameType.PVE, null, []);
		this._gameData.objects.push(new TankObject(
			this,
			{x: 23, y: 56},
			EDirection.right,
			ETankColor.WHITE,
			3,
			MAIN_TANK_ID
		));

		this._renderer = new Renderer(this, screen, './js/sprite.png');
		this.initializeInputs();
		// this.showTitle();
	}

	private initializeInputs() {
		this._keyState = {} as IKeyState;
		document.addEventListener('keydown', ev => {
			let mainTank = this.mainTank;
			switch (ev.code) {
				case 'ArrowUp':
					if (mainTank)
						mainTank.direction = EDirection.up;
						this.resetArrowInput();
						this._keyState[ev.code] = true;
						break;
				case 'ArrowRight':
					if (mainTank)
						mainTank.direction = EDirection.right;
						this.resetArrowInput();
						this._keyState[ev.code] = true;
						break;
				case 'ArrowDown':
					if (mainTank)
						mainTank.direction = EDirection.down;
						this.resetArrowInput();
						this._keyState[ev.code] = true;
						break;
				case 'ArrowLeft':
					if (mainTank)
						mainTank.direction = EDirection.left;
						this.resetArrowInput();
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


	public showTitle() {

	}

	public showMenu() {

	}

	public newGame(gameType: EGameType, level: ILevel, objects: Array<GameObject>) {
		this._gameData = {
			gameType: gameType,
			levelData: level,
			objects: objects
		} as IGameData
	}

	public getObjects(): Array<GameObject> {
		if (this._gameData.objects == undefined) {
			return [];
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
}