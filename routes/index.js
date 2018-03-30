const express = require('express')

const router = express.Router()

const messageRoutes = require('./messages')

router.use('/api/messages/', messageRoutes)

module.exports = router
