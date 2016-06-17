function doubleAll(numbers) {
	try {
		return eval("numbers.map(x => x * 2);");
	} catch (e) {
		return numbers.map(function (val) {
			return val * 2;
		});
	}
}

module.exports = doubleAll;
