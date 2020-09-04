import { Point, Size } from "../../Utils/UnitTypes";
import { ETankColor } from "../../Game/Object/TankObject";

export interface SpriteDef {
	position: Point;
	size: Size;
};

export interface singleSpriteDef {
	up: SpriteDef;
	left: SpriteDef;
	down: SpriteDef;
	right: SpriteDef;
}

export interface multiSpriteDef {
	up: Array<SpriteDef>;
	left: Array<SpriteDef>;
	down: Array<SpriteDef>;
	right: Array<SpriteDef>;
}

const SPRTIE_DEF = {
	TANK: {
		YELLOW: [
			{	// tank_yellow_0
				up: [
					{ position: { x: 0, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 0 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 0 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 0 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 0 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_yellow_1
				up: [
					{ position: { x: 0, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 32 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 32 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 32 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 32 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_yellow_2
				up: [
					{ position: { x: 0, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 64 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 64 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 64 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 64 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_yellow_3
				up: [
					{ position: { x: 0, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 96 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 96 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 96 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 96 }, size: { width: 32, height: 32 } },
				]
			}
		],
		GREEN: [
			{	// tank_green_0
				up: [
					{ position: { x: 0, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 256 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 256 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 256 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 256 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_green_1
				up: [
					{ position: { x: 0, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 288 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 288 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 288 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 288 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_green_2
				up: [
					{ position: { x: 0, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 320 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 320 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 320 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 320 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_green_3
				up: [
					{ position: { x: 0, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 352 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 352 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 352 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 352 }, size: { width: 32, height: 32 } },
				]
			}
		],
		WHITE: [
			{	// tank_white_0
				up: [
					{ position: { x: 256, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 0 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 0 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 0 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 0 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 0 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_white_1
				up: [
					{ position: { x: 256, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 32 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 32 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 32 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 32 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 32 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_white_2
				up: [
					{ position: { x: 256, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 64 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 64 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 64 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 64 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 64 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_white_3
				up: [
					{ position: { x: 256, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 96 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 96 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 96 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 96 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 96 }, size: { width: 32, height: 32 } },
				]
			}
		],
		MAGENTA: [
			{	// tank_magenta_0
				up: [
					{ position: { x: 256, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 256 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 256 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 256 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 256 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 256 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_magenta_1
				up: [
					{ position: { x: 256, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 288 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 288 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 288 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 288 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 288 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_magenta_2
				up: [
					{ position: { x: 256, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 320 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 320 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 320 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 320 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 320 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_magenta_3
				up: [
					{ position: { x: 256, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 352 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 352 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 352 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 352 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 352 }, size: { width: 32, height: 32 } },
				]
			}
		],
	},
	ENEMY: {
		YELLOW: [
			{	// enemy_yellow_0
				up: [
					{ position: { x: 0, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 128 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 128 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 128 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 128 }, size: { width: 32, height: 32 } },
				]
			},
			{	// enemy_yellow_1
				up: [
					{ position: { x: 0, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 160 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 160 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 160 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 160 }, size: { width: 32, height: 32 } },
				]
			},
			{	// enemy_yellow_2
				up: [
					{ position: { x: 0, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 192 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 192 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 192 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 192 }, size: { width: 32, height: 32 } },
				]
			},
			{	// enemy_yellow_3
				up: [
					{ position: { x: 0, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 224 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 224 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 224 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 224 }, size: { width: 32, height: 32 } },
				]
			}
		],
		GREEN: [
			{	// tank_green_0
				up: [
					{ position: { x: 0, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 384 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 384 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 384 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 384 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_green_1
				up: [
					{ position: { x: 0, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 416 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 416 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 416 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 416 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_green_2
				up: [
					{ position: { x: 0, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 448 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 448 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 448 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 448 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_green_3
				up: [
					{ position: { x: 0, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 32, y: 480 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 64, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 96, y: 480 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 128, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 160, y: 480 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 192, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 224, y: 480 }, size: { width: 32, height: 32 } },
				]
			}
		],
		WHITE: [
			{	// tank_white_0
				up: [
					{ position: { x: 256, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 128 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 128 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 128 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 128 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 128 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_white_1
				up: [
					{ position: { x: 256, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 160 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 160 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 160 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 160 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 160 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_white_2
				up: [
					{ position: { x: 256, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 192 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 192 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 192 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 192 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 192 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_white_3
				up: [
					{ position: { x: 256, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 224 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 224 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 224 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 224 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 224 }, size: { width: 32, height: 32 } },
				]
			}
		],
		MAGENTA: [
			{	// tank_magenta_0
				up: [
					{ position: { x: 256, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 384 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 384 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 384 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 384 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 384 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_magenta_1
				up: [
					{ position: { x: 256, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 416 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 416 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 416 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 416 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 416 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_magenta_2
				up: [
					{ position: { x: 256, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 448 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 448 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 448 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 448 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 448 }, size: { width: 32, height: 32 } },
				]
			},
			{	// tank_magenta_3
				up: [
					{ position: { x: 256, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 288, y: 480 }, size: { width: 32, height: 32 } },
				],
				left: [
					{ position: { x: 320, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 352, y: 480 }, size: { width: 32, height: 32 } },
				],
				down: [
					{ position: { x: 384, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 416, y: 480 }, size: { width: 32, height: 32 } },
				],
				right: [
					{ position: { x: 448, y: 480 }, size: { width: 32, height: 32 } },
					{ position: { x: 480, y: 480 }, size: { width: 32, height: 32 } },
				]
			}
		],
	},
	BULLET: {
		up: { position: { x: 646, y: 204 }, size: { width: 6, height: 8 } },
		left: { position: { x: 660, y: 204 }, size: { width: 8, height: 6 } },
		down: { position: { x: 678, y: 204 }, size: { width: 6, height: 8 } },
		right: { position: { x: 692, y: 204}, size: { width: 8, height: 6} }
	},
	BLOCK: {
		BRICK: [
			{
				position: { x: 512, y: 0 },
				size: {width: 32, height: 32}
			}
		],
		IRON: [
			{
				position: { x: 512, y: 32 },
				size: {width: 32, height: 32}
			}
		],
		WATER: [
			{
				position: { x: 512, y: 96 },
				size: {width: 32, height: 32}
			},
			{
				position: { x: 544, y: 96 },
				size: {width: 32, height: 32}
			}
		],
		BUSH: [
			{
				position: { x: 544, y: 64 },
				size: {width: 32, height: 32}
			}
		],
		EAGLE: [
			{
				position: { x: 608, y: 64 },
				size: {width: 32, height: 32}
			},
			{
				position: { x: 640, y: 64 },
				size: {width: 32, height: 32}
			}
		]
	},
	ANIMATION: {
		EXPLOSION_SMALL: [
			{
				position: { x: 518, y: 260 },
				size: { width: 22, height: 22 }
			},
			{
				position: { x: 544, y: 258 },
				size: { width: 30, height: 28 }
			},
			{
				position: { x: 576, y: 256 },
				size: { width: 32, height: 32 }
			}
		],
		EXPLOSION_LARGE: [
			{
				position: { x: 610, y: 258 },
				size: { width: 58, height: 58 }
			},
			{
				position: { x: 668, y: 256 },
				size: { width: 68, height: 64 }
			}
		],
		INVINCIBLE: [
			{
				position: { x: 512, y: 288 },
				size: { width: 32, height: 32 }
			},
			{
				position: { x: 544, y: 288 },
				size: { width: 32, height: 32 }
			},
		],
		SPAWN: [
			{
				position: { x: 518, y: 198 },
				size: { width: 18, height: 18 }
			},
			{
				position: { x: 548, y: 196 },
				size: { width: 22, height: 22 }
			},
			{
				position: { x: 578, y: 194 },
				size: { width: 26, height: 26 }
			},
			{
				position: { x: 608, y: 192 },
				size: { width: 30, height: 30 }
			},
		],
		SCORE_100: [
			{
				position: { x: 580, y: 328 },
				size: { width: 26, height: 14 }
			},
		],
		SCORE_200: [
			{
				position: { x: 610, y: 328 },
				size: { width: 28, height: 14 }
			},
		],
		SCORE_300: [
			{
				position: { x: 642, y: 328 },
				size: { width: 28, height: 14 }
			},
		],
		SCORE_400: [
			{
				position: { x: 674, y: 328 },
				size: { width: 28, height: 14 }
			},
		],
		SCORE_500: [
			{
				position: { x: 706, y: 328 },
				size: { width: 28, height: 14 }
			},
		],
		GAMEOVER: [
			{
				position: { x: 578, y: 368 },
				size: { width: 62, height: 30 }
			},
		],
		PAUSE: [
			{
				position: { x: 578, y: 352 },
				size: { width: 78, height: 14 }
			}
		],
		TITLE: [
			{
				position: { x: 0, y: 0 },
				size: { width: 512, height: 480 }
			}
		],
		CURSOR: [
			{ position: { x: 192, y: 0 }, size: { width: 32, height: 32 } },
			{ position: { x: 224, y: 0 }, size: { width: 32, height: 32 } },
		],
		CURTAIN: [
			{
				position: { x: 0, y: 0}, size: { width: 0, height: 0 }
			}
		]
	},
	ITEM: {
		HELMET: {
			position: { x: 512, y: 224 },
			size: { width: 32, height: 30 }
		},
		WATCH: {
			position: { x: 544, y: 224 },
			size: { width: 32, height: 30 }
		},
		SHOVEL: {
			position: { x: 576, y: 224 },
			size: { width: 32, height: 30 }
		},
		STAR: {
			position: { x: 608, y: 224 },
			size: { width: 32, height: 30 }
		},
		BOMB: {
			position: { x: 640, y: 224 },
			size: { width: 32, height: 30 }
		},
		TANK: {
			position: { x: 672, y: 224 },
			size: { width: 32, height: 30 }
		},
		PISTOL: {
			position: { x: 704, y: 224 },
			size: { width: 32, height: 30 }
		},
	},
	SYSTEM: {
		NULL: {
			position: { x: 0, y: 0 },
			size: { width: 0, height: 0 }
		},
		TANK_ICON: {
			position: { x: 640, y: 384 },
			size: { width: 16, height: 16 }
		},
		STAGE: {
			position: { x: 658, y: 351 },
			size: { width: 78, height: 16 }
		},
		NUMBER: [
			{	// 0
				position: { x: 657, y: 367 },
				size: { width: 16, height: 16 }
			},
			{	// 1
				position: { x: 674, y: 367 },
				size: { width: 16, height: 16 }
			},
			{	// 2
				position: { x: 689, y: 367 },
				size: { width: 16, height: 16 }
			},
			{	// 3
				position: { x: 705, y: 367 },
				size: { width: 16, height: 16 }
			},
			{	// 4
				position: { x: 721, y: 367 },
				size: { width: 16, height: 16 }
			},
			{	// 5
				position: { x: 657, y: 383 },
				size: { width: 16, height: 16 }
			},
			{	// 6
				position: { x: 674, y: 383 },
				size: { width: 16, height: 16 }
			},
			{	// 7
				position: { x: 689, y: 383 },
				size: { width: 16, height: 16 }
			},
			{	// 8
				position: { x: 705, y: 383 },
				size: { width: 16, height: 16 }
			},
			{	// 9
				position: { x: 721, y: 383 },
				size: { width: 16, height: 16 }
			}
		],
		FRAME: {
			position: { x: 736, y: 0 },
			size: { width: 64, height: 480 }
		}
	},
}

export default SPRTIE_DEF;