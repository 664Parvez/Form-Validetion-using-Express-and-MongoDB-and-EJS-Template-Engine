const getLogin = require('../controllers/login.controller')

const router = require('express').Router()

router.get('/login', getLogin)


module.exports = router
