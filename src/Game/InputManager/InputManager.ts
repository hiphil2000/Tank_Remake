import IKeyState from "./IKeyState";
import Game from "../Game";
import EMenuType from "../Menu/EMenuType";
import EKeys, { EKeysToEDirection } from "./EKeys";

interface IEvents {
	keydown: (ev: KeyboardEvent) => void;
	keyup: (ev: KeyboardEvent) => void;
}

export default class InputManager {
	private _game: Game;
	private _keyState: IKeyState;
	private _cursorIndex: number;
	private _keyEvents: IEvents;

	constructor(game: Game) {
		this._game = game;
		this._keyEvents = {} as IEvents;

		this.initialize();
	}

	public initialize() {
		this._keyState = {
			ArrowDown: false,
			ArrowUp: false,
			ArrowRight: false,
			ArrowLeft: false,
			Escape: false,
			Space: false
		};
		this._cursorIndex = 0;
		this.setEvents();
	}

	get keyState(): IKeyState {
		return this._keyState;
	}

	get cursorIndex(): number {
		return this._cursorIndex;
	}
	
	private setEvents() {
		if (this._keyEvents.keydown != null) {
			document.removeEventListener('keydown', this._keyEvents.keydown);
		}
		if (this._keyEvents.keyup != null) {
			document.removeEventListener('keyup', this._keyEvents.keyup);
		}

		this._keyEvents.keydown = (ev:KeyboardEvent) => {
			this.keyDownEvent(ev);
		}
		this._keyEvents.keyup = (ev:KeyboardEvent) => {
			this.keyUpEvent(ev);
		}

		document.addEventListener('keydown', this._keyEvents.keydown);
		document.addEventListener('keyup', this._keyEvents.keyup);
	}

	private resetArrowInput() {
		this._keyState.ArrowUp = false;
		this._keyState.ArrowRight = false;
		this._keyState.ArrowDown = false;
		this._keyState.ArrowLeft = false;
	}

	private keyDownEvent(ev: KeyboardEvent) {
		const mainTank = this._game.mainTank;
		const menu = this._game.currentMenu;
		if (menu === EMenuType.GAME) {
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
					if (mainTank && mainTank.visible === true) {
						mainTank.fire();
					}
					this._keyState[ev.code] = true;
					break;
				case EKeys.esc:
					ev.preventDefault();
					this._keyState[ev.code] = true;
					if (!this._game.gameData.gameOver) {
						if (this._game.pause) {
							this._game.pause = false;
						} else {
							this._game.pause = true;
						}	
					}
					break;
			}
		} else if (menu === EMenuType.MAIN) {
			switch (ev.code) {
				case EKeys.arrow_up:
					ev.preventDefault();
					if (this._game.getObjects().length > 1) {
						if (this._cursorIndex - 1 < 0) {
							this._cursorIndex = 2;
						} else {
							this._cursorIndex--;
						}
					}
					console.log(this.cursorIndex);
					break;
				case EKeys.arrow_down:
					ev.preventDefault();
					if (this._game.getObjects().length > 1) {
						if (this._cursorIndex + 1 > 2) {
							this._cursorIndex = 0;
						} else {
							this._cursorIndex++;
						}
					}
					break;
				case EKeys.spacebar:
					ev.preventDefault();
					switch(this._cursorIndex) {
						case 0:
							this._game.newGame(1);
							break;
					}
					break;
			}
		}
	}

	private keyUpEvent(ev: KeyboardEvent) {
		let code = ev.code as EKeys;
		this._keyState[code] = false;
	}
}