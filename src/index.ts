import Game from "./Game/Game";
import { ETankColor } from "./Game/Object/TankObject";
const spriteImage = require('./Render/Sprite/sprite.png');
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const debug_btn = document.getElementById("debug");

const mainTank_level = document.getElementById("mainTank_level") as HTMLSelectElement;
const mainTank_color = document.getElementById("mainTank_color") as HTMLSelectElement;
const mainTank_invincible = document.getElementById("mainTank_invincible") as HTMLButtonElement;

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

mainTank_color.value = game.mainTank.tankColor.toString();
mainTank_level.value = game.mainTank.tankLevel.toString();

mainTank_level.addEventListener("change", () => {updateTank()});
mainTank_color.addEventListener("change", () => {updateTank()});
mainTank_invincible.addEventListener("click", () => {
	//game.mainTank.setInvincible()
})

function updateTank() {
	game.mainTank.tankColor = mainTank_color.value as ETankColor;
	game.mainTank.tankLevel = parseInt(mainTank_level.value);
}