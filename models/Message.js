const ko = require('nekodb')

const Message = ko.Model('Message', {
	sender: ko.String[30],
	body: ko.String[200],
	date: ko.Date.now(),
})

module.exports = Message
