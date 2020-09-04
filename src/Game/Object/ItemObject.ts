import GameObject from "./GameObject";
import EItemType from "./Enum/EItemType";
import Game from "../Game";
import EObjectType from "./Enum/EObjectType";
import { Point } from "../../Utils/UnitTypes";
import { Guid } from "../../Utils/Utils";
import TankObject from "./TankObject";
import EAnimationType from "./Enum/EAnimationType";
import ETankType from "./Enum/ETankType";

export const ITEM_WATCH_TIME = 3000;

export default class ItemObject extends GameObject {
	public itemType: EItemType;

	constructor(game: Game, itemType: EItemType, position: Point) {
		super(game, EObjectType.ITEM, position, Guid.newGuid());
		this.itemType = itemType;
	}

	hit(eventOrigin: GameObject): void {
		const origin = eventOrigin as TankObject
		if (origin.tankType === ETankType.ENEMY_TANK) {
			return;
		}
		let otherTanks = this._game.objects.filter(x => {
			const tank = x as TankObject;
			return tank.tankType === ETankType.ENEMY_TANK;
		}) as Array<TankObject>;
		switch(this.itemType) {
			case EItemType.BOMB:
				otherTanks.forEach(tank => {
					tank.destroy();
				});
				break;
			case EItemType.HELMET:
				origin.invincible();
				break;
			case EItemType.PISTOL:
				// point up
				break;
			case EItemType.STAR:
				origin.levelup();
				break;
			case EItemType.TANK:
				// life 1 up
				break;
			case EItemType.WATCH:
				this._game.setEnemyPause(true);
				break;
			case EItemType.SHOVEL:
				// change all bricks into iron
				break;
		}

		this._game.startAnimation(this, EAnimationType.SCORE_500, null);
		this.remove();
	}

}