function duckCount1() {
	// first attempt with a helper function
	function countDucks(args) {
		if (args.length === 0)
			return 0;

		var isDuck = Object.prototype.hasOwnProperty.call(args[0], 'quack');

		return (isDuck ? 1 : 0) + countDucks(args.slice(1));
	}

	return countDucks(Array.prototype.slice.call(arguments));
}

function duckCount() {
	return Array.prototype.filter.call(arguments, function(el) {
		return Object.prototype.hasOwnProperty.call(el, 'quack');
	}).length;
}

module.exports = duckCount;
