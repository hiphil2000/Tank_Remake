export default class Renderer {
	private _canvas: HTMLCanvasElement;
	
	constructor(canvas: HTMLCanvasElement) {
		if (canvas == undefined) {
			throw 'canvas is null or undefined';
		}
		this._canvas = canvas;
		this.initScreen();
	}

	private initScreen() {

	}

	private render() {
		
	}
}