function countWords(inputWords) {
	return inputWords.reduce(function addWord(previousVal, currentVal) {
		if (previousVal.hasOwnProperty(currentVal)) {
			++previousVal[currentVal];
		} else {
			previousVal[currentVal] = 1;
		}

		return previousVal;
	}, {});
}

module.exports = countWords;
