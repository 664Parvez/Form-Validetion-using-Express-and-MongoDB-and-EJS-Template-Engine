const { getSignin, postSignin } = require('../controllers/signin.controller')

const router = require('express').Router()

router.get('/signin', getSignin)
router.post('/signin', postSignin)

module.exports = router
