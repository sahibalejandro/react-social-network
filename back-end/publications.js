const express = require('express')
const Publication = require('./models/Publication')

const router = express.Router()

router.get('/api/publications', async (req, res) => {
    res.json(await Publication.find())
})

router.post('/api/publications', async (req, res) => {
    res.json(await Publication.create({body: req.body.body}))
})

module.exports = router
