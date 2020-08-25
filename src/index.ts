import Game from "./Game/Game";
const spriteImage = require('./Render/Sprite/sprite.png');
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const debug_btn = document.getElementById("debug");

// init game
let game = new Game(canvas, './js/sprite.png');
debug_btn.addEventListener('click', ev => {
	if (debug_btn.getAttribute('value') == 'true') {
		game.debug = false;
		debug_btn.setAttribute('value', 'false');
	} else if(debug_btn.getAttribute('value') == 'false') {
		game.debug = true;
		debug_btn.setAttribute('value', 'true');
	}
	debug_btn.innerText = `debug = ${debug_btn.getAttribute('value')}`;
});