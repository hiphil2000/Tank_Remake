import TankObject, { ETankColor } from "./TankObject";
import ETankType, { EnemyType, EnemyScoreMap } from "./Enum/ETankType";
import Game from "../Game";
import { Point } from "../../Utils/UnitTypes";
import EDirection from "../../Utils/EDirection";
import EAnimationType, { ScoreToAnimation } from "./Enum/EAnimationType";
import GameObject from "./GameObject";

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

export default class TankAIOBject extends TankObject {
	private _hp: number;
	private _enemyType: EnemyType;
	private _hasItem: boolean;
	private _colorIndex: number;
	public lastChanged: number;

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
		this._hasItem = hasItem;
		this._colorIndex = 0;
		this._hp = hp;
		console.log(this.getColorDefinition());
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
		}
		
		return ColorSequenceDefinitions[key][index];
	}

	public hit(eventOrigin: GameObject) {
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
		if (eventOrigin && eventOrigin instanceof TankObject) {
			const player = eventOrigin as TankObject;
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
}