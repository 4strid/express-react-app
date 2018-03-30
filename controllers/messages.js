const Message = require('../models').Message

module.exports = {
	create (body) {
		return Message.create(body).save()
	},
	getAll () {
		return Message.find({}).sort({date: 1})
	},
}
