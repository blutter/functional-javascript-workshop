function reduce(arr, fn, initial) {

	function reducer(array, reducedVal, index) {
		if (!array.length)
			return reducedVal;

		var newReducedVal = fn(reducedVal, array[0], index, array);
		return reducer(array.slice(1), newReducedVal, ++index);
	}

	return reducer(arr, initial, 0);
}

module.exports = reduce;