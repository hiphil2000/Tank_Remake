import { throws } from "assert";
import GameObject, { Heading } from "./GameObject";
import { GameData } from "./GameData";
import { debug } from "console";
import TankObject, { TankColor } from "./TankObject";

export interface GameOptions {
	screen: {
		width: number,
		height: number
	}
}

const SPRITE_IMAGE_SRC = './js/sprite.png';
const MAX_FPS = 60;

const DRAWABLES = {
	display_background: "#000000",
	display_border: "#3f3f3f" 
}

export default class Game {
	private _cavnas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _options: GameOptions;
	private _gameData: GameData;
	private _sprite: HTMLImageElement;

	private _fpsInterval: number;
	private _now: number;
	private _then: number;
	private _elapsed: number;

	constructor(canvas: HTMLCanvasElement, options?: GameOptions) {
		// init display
		this._cavnas = canvas;
		this._ctx = this._cavnas.getContext("2d");
		if (options != undefined) {
			this._options = options;
		}
		this.initializeCanvas();

		// init game data
		this._gameData = new GameData();

		// init draw setting
		this._fpsInterval = 1000 / MAX_FPS;
		this._then = Date.now();

		// load sprite
		this._sprite = new Image();
		this._sprite.onload = () => {
			this._gameData.objects.push(new TankObject(
				"main",
				this._sprite,
				{
					color: TankColor.yellow,
					level: 0
				},
				{
					x: 16,
					y: 23,
					width: 16,
					height: 16,
					heading: Heading.up
				}
			));
			this.draw();
		}
		this._sprite.src = SPRITE_IMAGE_SRC;
	}

	private initializeCanvas() {
		this._cavnas.width = window.innerWidth;
		this._cavnas.height = window.innerHeight;

		document.addEventListener("keydown", ev => {
			this._gameData.updateKeystate(ev.keyCode, true);
		});

		document.addEventListener("keyup", ev => {
			this._gameData.updateKeystate(ev.keyCode, false);
		})
	}

	private draw() {
		// request another frame
		requestAnimationFrame(() => {this.draw();});
		
		this._now = Date.now();
		this._elapsed = this._now - this._then;

		// fpsInterval 이상의 시간이 지나면 프레임을 하나 받은 것으로 취급
		if (this._elapsed > this._fpsInterval) {
			this._then = this._now - (this._elapsed % this._fpsInterval);

			// 만약 화살표 키를 동시에 누르지 않은 상태라면 이동 처리함.
			if (!this._gameData.checkDuplicateArrow()) {
				var main = this._gameData.findObject("main");
				main.move(this._gameData.keyState);
			}

			// clear screen
			this._ctx.clearRect(0, 0, this._ctx.canvas.clientWidth, this._ctx.canvas.clientHeight);

			this._gameData.objects.forEach(object => {
				object.draw(this._ctx);
			})

			// draw debug counter
			this.drawDebugCounter();
		}
	}

	private drawDebugCounter() {
		let debugText = `${this._elapsed.toFixed(2)}ms per frame`;
		debugText += `right: ${this._gameData.keyState.arrow_right}`;
		let ctx = this._ctx;

		ctx.font = '12px san-serif';
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 2;
		ctx.strokeText(debugText, 0, 20);

		ctx.fillStyle = 'black';
		ctx.fillText(debugText, 0, 20);
	}
}