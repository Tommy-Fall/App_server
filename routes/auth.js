const express = require('express')
const router = express.Router()
const {register, login, logout, requireLogin} = require('../controllers/auth')

//validators
const {runValidation} = require('../validators')
const {userRegisterValidator} = require('../validators/auth')

router.post('/register', userRegisterValidator, runValidation , register)
router.post('/login', login)
router.get('/logout', logout)
//test
router.get('/secret',requireLogin, (req,res)=>{
    res.json({
        message: 'you have access to secret page'
    })
})

module.exports = router