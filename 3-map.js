function doubleAll(numbers) {
	// return numbers.map(x => x * 2);
	return numbers.map(function(val) {
		return val * 2;
	});
}

module.exports = doubleAll;
