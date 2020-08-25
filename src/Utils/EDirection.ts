import EKeys from "../Game/InputManage/EKeys";

const enum EDirection {
	up = 'up',
	right = 'right',
	down = 'down',
	left = 'left'
};

export function EDirectionToEKeys(direction: EDirection) {
	switch (direction) {
		case EDirection.up:
			return EKeys.arrow_up;
		case EDirection.right:
			return EKeys.arrow_right;
		case EDirection.down:
			return EKeys.arrow_down;
		case EDirection.left:
			return EKeys.arrow_left;
	}
}

export default EDirection;