import Game from "./Game/Game";
const spriteImage = require('./Render/Sprite/sprite.png');
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// init game
let game = new Game(canvas, './js/sprite.png');