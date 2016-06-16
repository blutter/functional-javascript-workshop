function getShortMessages(messages) {
	return messages.filter(function(el) {
		return el.message.length < 50;
	}).map(function(elWithShortMsg) {
		return elWithShortMsg.message;
	})
}

module.exports = getShortMessages
