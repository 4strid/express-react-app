const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const PORT = process.env.PORT || 3001

const app = express()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
}

app.use(bodyParser.json())

app.use(routes)

app.listen(PORT, () => {
	console.log('Listening on port ' + PORT)
})
