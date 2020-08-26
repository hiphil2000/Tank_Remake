import Game from "./Game/Game";
import { ETankColor } from "./Game/Object/TankObject";
const spriteImage = require('./Render/Sprite/sprite.png');
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// init game
let game = new Game(canvas, './js/sprite.png');

//#region DEBUG
const debug_btn = document.getElementById("debug");

const mainTank_level = document.getElementById("mainTank_level") as HTMLSelectElement;
const mainTank_color = document.getElementById("mainTank_color") as HTMLSelectElement;
const mainTank_invincible = document.getElementById("mainTank_invincible") as HTMLButtonElement;
const mainTank_hit = document.getElementById("mainTank_hit") as HTMLButtonElement;
const objects = document.getElementById("objects") as HTMLTableElement;

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
mainTank_invincible.addEventListener("click", () => { game.mainTank.invincible(); });
mainTank_hit.addEventListener("click", () => { game.mainTank.hit(); });
let objectFinder = setInterval(() => {
	console.log("!");
	objects.innerHTML = 
	`
	<tr>
		<td>zIndex</td>
		<td>id</td>
		<td>type</td>
		<td>position</td>
	</tr>
	`;
	game.getObjects().forEach(object => {
		objects.innerHTML = objects.innerHTML + 
		`
		<tr>
			<td>${game.getObjectZIndex(object)}</td>
			<td>${object.id}</td>
			<td>${object.objectType}</td>
			<td>[x: ${object.position.x}, y: ${object.position.y}]</td>
		</tr>
		`
	})
}, 100)

function updateTank() {
	game.mainTank.tankColor = mainTank_color.value as ETankColor;
	game.mainTank.tankLevel = parseInt(mainTank_level.value);
}

//#endregion