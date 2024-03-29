const enum EAnimationType {
	EXPLOSION_SMALL = 'EXPLOSION_SMALL',
	EXPLOSION_LARGE = 'EXPLOSION_LARGE',
	INVINCIBLE = 'INVINCIBLE',
	SPAWN = 'SPAWN',
	SCORE_100 = 'SCORE_100',
	SCORE_200 = 'SCORE_200',
	SCORE_300 = 'SCORE_300',
	SCORE_400 = 'SCORE_400',
	SCORE_500 = 'SCORE_500',
	GAMEOVER = 'GAMEOVER',
	PAUSE = 'PAUSE',
	TITLE = 'TITLE',
	CURSOR = 'CURSOR',
	CURTAIN = 'CURTAIN'
}

export function ScoreToAnimation(score: number): EAnimationType {
	switch(Math.floor(score / 100)) {
		case 1:
			return EAnimationType.SCORE_100;
		case 2:
			return EAnimationType.SCORE_200;
		case 3:
			return EAnimationType.SCORE_300;
		case 4:
			return EAnimationType.SCORE_400;
		case 5:
			return EAnimationType.SCORE_500;
	}
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
		duration: 1000,
		frameRate: 1000 / 13,
		loop: true
	},
	SCORE_100: {
		duration: 1000,
		frameRate: 0,
		loop: false
	},
	SCORE_200: {
		duration: 1000,
		frameRate: 0,
		loop: false
	},
	SCORE_300: {
		duration: 1000,
		frameRate: 0,
		loop: false
	},
	SCORE_400: {
		duration: 1000,
		frameRate: 0,
		loop: false
	},
	SCORE_500: {
		duration: 1000,
		frameRate: 0,
		loop: false
	},
	GAMEOVER: {
		duration: 4000,
		frameRate: 100,
		loop: true
	},
	PAUSE: {
		duration: -1,
		frameRate: 100,
		loop: true
	},
	TITLE: {
		duration: 4000,
		frameRate: 100,
		loop: true
	},
	CURSOR: {
		duration: 50,
		frameRate: 25,
		loop: true
	},
	CURTAIN: {
		duration: 3000,
		frameRate: 25,
		loop: true
	}
};

export default EAnimationType