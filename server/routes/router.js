const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')

router.post('/create', (req, res) => controller.createUser(req, res))
router.get('/findUser/:username', (req, res) => controller.findUser(req, res))
router.post('/update', (req, res) => controller.updateUser(req, res))

module.exports = router