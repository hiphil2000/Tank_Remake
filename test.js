var given = [-1, 0, 1, 2, -1, -4];

function test(given) {
	var result = [];
	for(var i = 0; i < given.length; i++) {
		var set = [];
		set.push(given[i]);

		for(var j = 0; j < given.length; j++) {
			if (i == j || given[i] + given[j] == 0) {
				continue;
			}
			set.push(given[j]);
			var sum_1 = set[0] + set[1];

			for(var k = 0; j < given.length; j++) {
				if (!(i == k || k == j || set[0] + set[1] != 0)) {
					// found
					result.push(set);
				}
			}
		}
	}

	return result;
}

console.log(test(given));