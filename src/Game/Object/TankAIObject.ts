import TankObject, { ETankColor, TANK_FIRE_DELAY } from "./TankObject";
import ETankType, { EnemyType, EnemyScoreMap } from "./Enum/ETankType";
import Game from "../Game";
import { Point } from "../../Utils/UnitTypes";
import EDirection from "../../Utils/EDirection";
import EAnimationType, { ScoreToAnimation } from "./Enum/EAnimationType";
import GameObject from "./GameObject";
import { getRandomEnum, getRandomRange } from "../../Utils/Utils";
import EObjectType from "./Enum/EObjectType";
import BulletObject from "./BulletObject";
import BlockObject from "./BlockObject";
import EBlockType from "./Enum/EBlockType";

export interface IColorSequenceDefinition {
	sequence: Array<ETankColor>;
	delay: number;
}

export const ColorSequenceDefinitions: {[key: string]: Array<IColorSequenceDefinition>} = {
	DEFAULT: [
		{
			sequence: [ETankColor.WHITE],
			delay: -1,
		}
	],
	ARMOURED: [	
		{
			sequence: [ETankColor.WHITE],
			delay: 25,
		},
		{
			sequence:[ETankColor.GREEN, ETankColor.YELLOW],
			delay: 25,
		},
		{
			sequence: [ETankColor.GREEN, ETankColor.WHITE],
			delay: 25,
		},
		{
			sequence: [ETankColor.YELLOW, ETankColor.WHITE],
			delay: 25,
		},
	],
	ITEM: [
		{
			sequence: [ETankColor.WHITE, ETankColor.MAGENTA],
			delay: 100,
		}
	]
}

export const AI_ACTION_DELAY = 500;
export const AI_FIRE_DELAY = 1000;

export default class TankAIOBject extends TankObject {
	private _hp: number;
	public lastChanged: number;
	private _enemyType: EnemyType;
	private _hasItem: boolean;
	private _colorIndex: number;
	private _lastTurned: number;

	constructor(game: Game, enemyType: EnemyType, hasItem: boolean, position: Point, direction: EDirection) {
		let level: number;
		let hp = 1;
		switch(enemyType) {
			case EnemyType.DEFAULT:
				level = 0;
				break;
			case EnemyType.SPEED:
				level = 1;
				break;
			case EnemyType.POWER:
				level = 2;
				break;
			case EnemyType.ARMOURED:
				level = 3;
				hp = 4;
				break;
		}
		super(
			game,
			ETankType.ENEMY_TANK,
			position,
			direction,
			ETankColor.WHITE,
			level
		);
		this.lastChanged = 0;

		this._enemyType = enemyType;
		if (this._enemyType === EnemyType.SPEED) {
			this._speed = 3;
		}
		this._hasItem = hasItem;
		this._colorIndex = 0;
		this._hp = hp;
		this._lastTurned = 0;
	}

	get colorIndex(): number {
		return this._colorIndex;
	}

	public nextColorIndex(): number {
		const definition = this.getColorDefinition();

		const maxIndex = definition.sequence.length;
		if (this._colorIndex + 1 >= maxIndex) {
			this._colorIndex = 0;
		} else {
			this._colorIndex++;
		}

		return this._colorIndex;
	}

	public getColorDefinition() {
		let key: string;
		let index: number;
		if (this._hasItem === true) {
			key = 'ITEM';
			index = 0;
		} else if (this._enemyType === EnemyType.ARMOURED) {
			key = this._enemyType.toString();
			index = this._hp - 1;
		} else {
			key = 'DEFAULT';
			index = 0;
		}
		
		return ColorSequenceDefinitions[key][index];
	}

	public action() {
		const now = performance.now();
		if (now - this._lastFired > AI_FIRE_DELAY) {
			this.fire();
			this._lastFired = now;
		}
		if (now - this._lastTurned > AI_ACTION_DELAY) {
			const random = Math.random();
			let direction: EDirection;
			if (random < .5) {
				direction = this.findEagle();
			} else if (random < .8) {
				direction = this.findPlayer();
			} else {	
				direction = getRandomEnum(EDirection);
			}
			if (direction) {
				this._direction = direction;
				this._lastTurned = now;
			}
		}
		this.move();
	}

	private findEagle(): EDirection {
		const eagle = this._game.objects.find(object => {
			if (object.objectType === EObjectType.BLOCK) {
				return (object as BlockObject).blockType === EBlockType.EAGLE;
			}
		});

		const xDiff = this.position.x - eagle.position.x;
		const yDiff = this.position.y - eagle.position.y;

		if (xDiff < yDiff) {
			if (this.position.x > eagle.position.x) {
				return EDirection.left;
			} else {
				return EDirection.right;
			}
		} else {
			if (this.position.y > eagle.position.y) {
				return EDirection.up;
			} else {
				return EDirection.down;
			}
		}
	}

	private findPlayer(): EDirection {
		const players = this._game.objects.filter(object => {
			if (object.objectType === EObjectType.TANK) {
				return (object as TankObject).tankType === ETankType.PLAYER_TANK;
			}
		});
		const player = players[getRandomRange(0, players.length - 1)];
		if (player == undefined) {
			return;
		}
		const xDiff = this.position.x - player.position.x;
		const yDiff = this.position.y - player.position.y;

		if (xDiff > yDiff) {
			if (this.position.x > player.position.x) {
				return EDirection.left;
			} else {
				return EDirection.right;
			}
		} else {
			if (this.position.y > player.position.y) {
				return EDirection.up;
			} else {
				return EDirection.down;
			}
		}
	}

	public hit(eventOrigin: GameObject) {
		if (eventOrigin.objectType === EObjectType.BULLET) {
			const bullet = eventOrigin as BulletObject;
			if (bullet.parent.tankType === ETankType.ENEMY_TANK) {
				return;
			}
		}
		this._hp -= 1;
		if (this._hp <= 0) {
			this.destroy(eventOrigin);
		}
	}

	public destroy(eventOrigin?: GameObject) {
		this.remove();
		if (this._hasItem) {
			this._game.spawnItem();
		}
		if (eventOrigin && eventOrigin instanceof BulletObject) {
			const player = eventOrigin.parent as TankObject;
			const playerIndex = player === this._game.mainTank ? 0 : 1;
			this._game.gameData.playerData[playerIndex].destroyedTank[this._enemyType]++;
			this._game.gameData.playerData[playerIndex].score += this.getTankScore();
			// TODO player 
		}
		this._game.startAnimation(this, EAnimationType.EXPLOSION_SMALL, null, (animation) => {
			this._game.startAnimation(animation.animationPoint, EAnimationType.EXPLOSION_LARGE, null, () => {
				const scoreAnimation = ScoreToAnimation(EnemyScoreMap.get(this._enemyType));
				this._game.startAnimation(animation.animationPoint, scoreAnimation, null, () => {
					this._game.spawnTank(this.tankType);
				});
			});
		})
	}

	public getTankScore() {
		switch(this._enemyType) {
			case EnemyType.DEFAULT:
				return 100;
			case EnemyType.SPEED:
				return 200;
			case EnemyType.POWER:
				return 300;
			case EnemyType.ARMOURED:
				return 400;
		}
	}
}