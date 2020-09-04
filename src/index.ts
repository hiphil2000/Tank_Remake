import Game from "./Game/Game";
import { ETankColor } from "./Game/Object/TankObject";
import Renderer from "./Render/Renderer";
import EObjectType from "./Game/Object/Enum/EObjectType";
const spriteMainImage = require('./Render/Sprite/sprite_main.png');
const spriteTItleImage = require('./Render/Sprite/sprite_title.png');
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// init game
let game = new Game(canvas, './js/sprite_main.png', './js/sprite_title.png');

//#region DEBUG
const debug_btn = document.getElementById("debug");

const mainTank_level = document.getElementById("mainTank_level") as HTMLSelectElement;
const mainTank_color = document.getElementById("mainTank_color") as HTMLSelectElement;
const mainTank_invincible = document.getElementById("mainTank_invincible") as HTMLButtonElement;
const mainTank_hit = document.getElementById("mainTank_hit") as HTMLButtonElement;
const tracks = {
	block: document.getElementById("li_block") as HTMLInputElement,
	tank: document.getElementById("li_tank") as HTMLInputElement,
	bullet: document.getElementById("li_bullet") as HTMLInputElement,
	animation: document.getElementById("li_animation") as HTMLInputElement,
};

const objects = document.getElementById("objects") as HTMLTableElement;
const gamedata = document.getElementById("gamedata") as HTMLTableElement;

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

mainTank_level.addEventListener("change", () => {updateTank()});
mainTank_color.addEventListener("change", () => {updateTank()});
mainTank_invincible.addEventListener("click", () => { game.mainTank.invincible(); });
mainTank_hit.addEventListener("click", () => { game.mainTank.destroy(); });
let objectFinder = setInterval(() => {
	objects.innerHTML = 
	`
	<tr>
		<td>zIndex</td>
		<td>id</td>
		<td>type</td>
		<td>position</td>
	</tr>
	`;
	gamedata.innerHTML = 
	`
	<tr>
		<td>type</td>
		<td>value</td>
	</tr>
	`;
	if (!game.debug) {
		return;
	}
	if (game.mainTank) {
		mainTank_color.value = game.mainTank.tankColor.toString();
		mainTank_level.value = game.mainTank.tankLevel.toString();
	}
	if (game.gameData) {
		gamedata.innerHTML = gamedata.innerHTML +
		`
		<tr>
			<td>gameover</td>
			<td>${game.gameData.gameOver}</td>
		</tr>
		<tr>
			<td>levelId</td>
			<td>${game.gameData.levelData?.levelId}</td>
		</tr>
		<tr>
			<td>p1 score</td>
			<td>${game.gameData.playerData[0]?.score}</td>
		</tr>
		`
	}
	game.objects.forEach(object => {
		switch(object.objectType) {
			case EObjectType.BLOCK:
				if (tracks.block.checked === false) {
					return;
				}
				break;
			case EObjectType.TANK:
				if (tracks.tank.checked === false) {
					return;
				}
				break;
			case EObjectType.BULLET:
				if (tracks.bullet.checked === false) {
					return;
				}
				break;
			case EObjectType.ANIMATION:
				if (tracks.animation.checked === false) {
					return;
				}
				break;
		}
		objects.innerHTML = objects.innerHTML + 
		`
		<tr>
			<td>${Renderer.getObjectZIndex(object)}</td>
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