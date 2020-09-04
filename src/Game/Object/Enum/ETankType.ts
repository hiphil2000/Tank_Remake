const enum ETankType {
	PLAYER_TANK = 'PLAYER_TANK',
	ENEMY_TANK = 'ENEMY_TANK',
}

enum EnemyType {
	DEFAULT = 'DEFAULT',
	SPEED = 'SPEED',
	POWER = 'POWER',
	ARMOURED = 'ARMOURED',
}

const EnemyScoreMap = new Map();
EnemyScoreMap.set(EnemyType.DEFAULT, 100);
EnemyScoreMap.set(EnemyType.SPEED, 200);
EnemyScoreMap.set(EnemyType.POWER, 300);
EnemyScoreMap.set(EnemyType.ARMOURED, 400);

export default ETankType;
export {EnemyType, EnemyScoreMap };