// ************ Require's ************
const express = require('express')
const router = express.Router()

// ************ Controller Require ************
const mainController = require('../controllers/mainController')

router.get('/', mainController.home)

router.get('/register', mainController.register)

router.get('/Login', mainController.Login)

module.exports = router;