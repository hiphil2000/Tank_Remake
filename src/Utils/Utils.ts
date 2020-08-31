export function deepClone(obj: any) {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	const result: any = Array.isArray(obj) ? [] : {};

	for (let key of Object.keys(obj)) {
		result[key] = deepClone(obj[key])
	}

	return result;
}

export class Guid {
	static newGuid() {
		return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
}

/**
 * find maximum number from number array
 * @param numbers given numbers
 */
export function max(numbers: Array<number>) {
	return Math.max.apply(null, numbers);
}

/**
 * find minimum number from number array
 * @param numbers given numbers
 */
export function min(numbers: Array<number>) {
	return Math.min.apply(null, numbers);
}

/**
 * get a random value between range
 * @param min range_min
 * @param max range_max
 */
export function getRandomRange(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min) + min);
}

export function removeDuplicate(array: Array<any>): Array<any> {
	let set = new Set(array);
	return [...set];
}