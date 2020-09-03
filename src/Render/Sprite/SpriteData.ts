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
import EDirection from "../../Utils/EDirection";
import EAnimationType from "../../Game/Object/Enum/EAnimationType";
import TankAIOBject from "../../Game/Object/TankAIObject";

/**
 * Find sprite data for given object
 * @param object found sprite definition
 */
export function getSpriteData(object: GameObject): SpriteDef {
	switch (object.objectType) {
		case EObjectType.TANK:
			const tank = object as TankObject;
			if (tank instanceof TankAIOBject && (tank as TankAIOBject).colorIndex != undefined) {
				const enemy = object as TankAIOBject;
				const sequence = enemy.getColorDefinition().sequence;
				return SPRTIE_DEF.ENEMY[sequence[enemy.colorIndex]][enemy.tankLevel][enemy.direction][enemy.spritePosition];
			} else {
				return SPRTIE_DEF.TANK[tank.tankColor][tank.tankLevel][tank.direction][tank.spritePosition];
			}
		case EObjectType.BULLET:
			const bullet = object as BulletObject;
			return SPRTIE_DEF.BULLET[bullet.direction];
		case EObjectType.ANIMATION:
			const animation = object as AnimationObject;
			return SPRTIE_DEF.ANIMATION[animation.animationType][animation.spritePosition];
		case EObjectType.BLOCK:
			const block = object as BlockObject;
			return SPRTIE_DEF.BLOCK[block.blockType][block.spritePosition];
		case EObjectType.ITEM:
			const item = object as ItemObject;
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

export function getObjectSize(type: EObjectType, direction?: EDirection): Size {
	if (direction == null) {
		direction = EDirection.up;
	}
	switch(type) {
		case EObjectType.BLOCK:
			return SPRTIE_DEF.BLOCK.BRICK[0].size;
		case EObjectType.TANK:
			return SPRTIE_DEF.TANK.YELLOW[0][direction][0].size;
		case EObjectType.BULLET:
			return SPRTIE_DEF.BULLET[direction].size;
		case EObjectType.ITEM:
			return SPRTIE_DEF.ITEM.BOMB.size;
	}
}

export function getAnimationSize(type: EAnimationType, frame: number): Size {
	return SPRTIE_DEF.ANIMATION[type][frame].size;
}