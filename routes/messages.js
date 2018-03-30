const express = require('express')

const messagesController = require('../controllers').messages

const router = express.Router()

router.get('/', (req, res) => {
	messagesController.getAll().then(messages => {
		res.json(messages)
	}).catch(err => {
		console.error(err)
		res.status(500).send()
	})
})

router.post('/', (req, res) => {
	messagesController.create(req.body).then(message => {
		res.json(message)
	}).catch(err => {
		console.error(err)
		res.status(500).send()
	})
})

module.exports = router
