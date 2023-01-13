express = require('express')
const app = express() 
const cors = require('cors')
require('dotenv').config()
//access users in db
const userdb = require('./models')
//access user in controller
const passport = require('./config/passport')()
const userCtrl = require('./controllers/users')

//MW 

// passport
app.use(passport.initialize())
// allows access to cors 
app.use(cors()) 
//body parser: for including info in the request of url into info we can use in variables like (req/body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// Use controllers for all other routes
app.use("/user", userCtrl)

// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})