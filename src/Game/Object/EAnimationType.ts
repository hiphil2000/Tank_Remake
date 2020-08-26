const enum EAnimationType {
	EXPLOSION_SMALL = 'EXPLOSION_SMALL',
	EXPLOSION_LARGE = 'EXPLOSION_LARGE',
	INVINCIBLE = 'INVINCIBLE',
	SPAWN = 'SPAWN',
	SCORE_100 = 'SCORE_100',
	SCORE_200 = 'SCORE_200',
	SCORE_300 = 'SCORE_300',
	SCORE_400 = 'SCORE_400',
	SCORE_500 = 'SCORE_500'
}

export interface AnimationValue {
	duration: number,
	frameRate: number,
	loop: boolean
};

// TODO Update defaults
export const AnimationDefaults = {
	EXPLOSION_SMALL: {
		duration: 200,
		frameRate: 200 / 4,
		loop: false
	},
	EXPLOSION_LARGE: {
		duration: 150,
		frameRate: 150 / 3,
		loop: false
	},
	INVINCIBLE: {
		duration: 3000,
		frameRate: 25,
		loop: true
	},
	SPAWN: {
		duration: 0,
		frameRate: 0,
		loop: false
	},
	SCORE_100: {
		duration: 0,
		frameRate: 0,
		loop: false
	},
	SCORE_200: {
		duration: 0,
		frameRate: 0,
		loop: false
	},
	SCORE_300: {
		duration: 0,
		frameRate: 0,
		loop: false
	},
	SCORE_400: {
		duration: 0,
		frameRate: 0,
		loop: false
	},
	SCORE_500: {
		duration: 0,
		frameRate: 0,
		loop: false
	}
};

export default EAnimationType