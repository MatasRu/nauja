const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const middle = require(`../middle/middle`)

router.post('/createRecipe', middle, controller.createRecipe)
// router.get('/findUser/:username', (req, res) => controller.findUser(req, res))
// router.post('/update', (req, res) => controller.updateUser(req, res))

module.exports = router