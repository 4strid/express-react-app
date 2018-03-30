const ko = require('nekodb')

ko.connect({
	client: 'nedb',
	filepath: __dirname + '/db',
})

module.exports = {
	Message: require('./Message'),
}
