import GameObject from "./GameObject";
import EItemType from "./Enum/EItemType";
import Game from "../Game";
import EObjectType from "./Enum/EObjectType";
import { Point } from "../../Utils/UnitTypes";
import { Guid } from "../../Utils/Utils";
import TankObject from "./TankObject";
import EAnimationType from "./Enum/EAnimationType";

export default class ItemObject extends GameObject {
	public itemType: EItemType;

	constructor(game: Game, itemType: EItemType, position: Point) {
		super(game, EObjectType.ITEM, position, Guid.newGuid());
		this.itemType = itemType;
	}

	hit(eventOrigin: GameObject): void {
		let mainTank = this._game.mainTank;
		let otherTanks = this._game.getObjects().filter(x => {
			return x.objectType === EObjectType.TANK && x != mainTank;
		}) as Array<TankObject>;
		switch(this.itemType) {
			case EItemType.BOMB:
				otherTanks.forEach(tank => {
					tank.hit();
				});
				break;
			case EItemType.HELMET:
				mainTank.invincible();
				break;
			case EItemType.PISTOL:
				// point up
				break;
			case EItemType.STAR:
				mainTank.levelup();
				break;
			case EItemType.TANK:
				// 1UP
				break;
			case EItemType.WATCH:
				// stop enemy tanks
				break;
		}

		this._game.startAnimation(this, EAnimationType.SCORE_500, null);
		this.remove();
	}

}