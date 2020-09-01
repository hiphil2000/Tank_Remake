import EObjectType from "../../Game/Object/Enum/EObjectType";
import SPRTIE_DEF, { SpriteDef } from "./SpriteDefinition";
import GameObject from "../../Game/Object/GameObject";
import TankObject from "../../Game/Object/TankObject";
import BulletObject from "../../Game/Object/BulletObject";
import AnimationObject from "../../Game/Object/AnimationObject";
import BlockObject from "../../Game/Object/BlockObject";
import ItemObject from "../../Game/Object/ItemObject";
import { Size } from "../../Utils/UnitTypes";
import ESystemSprite from "./ESystemSprite";

/**
 * Find sprite data for given object
 * @param object found sprite definition
 */
export function getSpriteData(object: GameObject): SpriteDef {
	switch (object.objectType) {
		case EObjectType.TANK:
			let tank = object as TankObject;
			return SPRTIE_DEF.TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
		case EObjectType.BULLET:
			let bullet = object as BulletObject;
			return SPRTIE_DEF.BULLET[bullet.direction];
		case EObjectType.ANIMATION:
			let animation = object as AnimationObject;
			return SPRTIE_DEF.ANIMATION[animation.animationType][animation.spritePosition];
		case EObjectType.BLOCK:
			let block = object as BlockObject;
			return SPRTIE_DEF.BLOCK[block.blockType][block.spritePosition];
		case EObjectType.ITEM:
			let item = object as ItemObject;
			return SPRTIE_DEF.ITEM[item.itemType];
	}
}

export function getSystemSprite(spriteType: ESystemSprite, number: number = 0) {
	switch (spriteType) {
		case ESystemSprite.NULL:
		case ESystemSprite.TANK_ICON:
		case ESystemSprite.STAGE:
		case ESystemSprite.FRAME:
			return SPRTIE_DEF.SYSTEM[spriteType];
		case ESystemSprite.NUMBER:
			return SPRTIE_DEF.SYSTEM.NUMBER[number];
	}
}

export function getSpriteSize(object: GameObject): Size {
	return getSpriteData(object).size;
}