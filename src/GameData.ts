import GameObject from "./GameObject";

export class GameData {
	keyState: KeyState;
	objects: Array<GameObject>;

	constructor() {
		this.keyState = {} as KeyState;
		this.objects = [];
	}

	updateKeystate(keyCode: number, state: boolean) {
		switch(keyCode) {
			case 37:
				this.keyState.arrow_left = state;
				break;
			case 38:
				this.keyState.arrow_up = state;
				break;
			case 39: 
				this.keyState.arrow_right = state;
				break;
			case 40:
				this.keyState.arrow_down = state;
				break;
			case 13:
				// enter
				break;
		}
	}

	checkDuplicateArrow(): boolean {
		var arrowDownCount = 0;
		[
			this.keyState.arrow_down,
			this.keyState.arrow_left,
			this.keyState.arrow_up,
			this.keyState.arrow_right
		].forEach(arrow => {
			if (arrow) {
				arrowDownCount ++;
			}
		})
		return arrowDownCount > 1;
	}

	findObject(id: string): GameObject {
		for(var i = 0; i < this.objects.length; i++) {
			if (this.objects[i].id === id) {
				return this.objects[i];
			}
		}
		return null;
	}
}

export interface KeyState {
	arrow_up: boolean;
	arrow_left: boolean;
	arrow_right: boolean;
	arrow_down: boolean;
	space: boolean;
}