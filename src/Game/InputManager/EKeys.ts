import EDirection from "../../Utils/EDirection";

const enum EKeys {
	arrow_up = 'ArrowUp',
	arrow_right = 'ArrowRight',
	arrow_down = 'ArrowDown',
	arrow_left = 'ArrowLeft',
	spacebar = 'Space',
	esc = 'Escape'
}

export function EKeysToEDirection(keys: EKeys) {
	switch(keys) {
		case EKeys.arrow_up:
			return EDirection.up;
		case EKeys.arrow_right:
			return EDirection.right;
		case EKeys.arrow_down:
			return EDirection.down;
		case EKeys.arrow_left:
			return EDirection.left;
	}
}

export default EKeys;