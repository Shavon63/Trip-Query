// packages for dependicies
const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
// configs
const passport = require('../config/passport.js')
const config = require('../config/config')
// models
const db = require("../models");
const User = db.User


//ROUTES 

// SIGN UP ROUTE (create user)
router.post('/signup', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(!foundUser){
        const createdUser = await db.User.create(req.body)
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    }
  })


router.post('/login', async (req, res) => {
    const foundUser = await User.findOne({ username: req.body.username })
    if (foundUser && foundUser.password === req.body.password) {
        const payload = {id: foundUser.id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            user: foundUser
        })
    } else {
      res.sendStatus(401)
    }
})


// GET USER DATA (if user is logged in)
router.get('/map/:id', async (req, res) => {
    const foundUser = await User.findById(req.params.id)
    if (foundUser) {
        res.json(foundUser)
    } else {
        res.sendStatus(404)
    }
})


router.put('/:id', async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(
        req.params.id,  
        req.params.body,
        {new: true}
        )
        res.json(updateUser)


})

router.get('/', async (req, res) => {
    const token = req.headers.authorization
    const decode = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decode.id)
    res.json(foundUser)
  })

router.delete('/', async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({status: 200})
});

module.exports = router; 