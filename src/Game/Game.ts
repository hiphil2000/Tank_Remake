import Renderer from "../Render/Renderer";
import IGameData from "./GameData/IGameData";

export default class Game {
	private _renderer: Renderer;
	private _gameData: IGameData;

	constructor(screen: HTMLCanvasElement) {
		this._renderer = new Renderer(screen);

		this.showTitle();
	}

	public showTitle() {

	}

	public showMenu() {

	}
}