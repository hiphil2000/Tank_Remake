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