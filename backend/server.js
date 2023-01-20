express = require('express')
const app = express() 
const cors = require('cors')
require('dotenv').config()
//access users in db
const userdb = require('./models')
//access user in controller
const passport = require('./config/passport')()
const userCtrl = require('./controllers/users')
const axios = require("axios")
const path = require("path")

//MW 

// passport
app.use(passport.initialize())
// allows access to cors 
app.use(cors()) 
//body parser: for including info in the request of url into info we can use in variables like (req/body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// Use controllers for all other routes
app.use("/users", userCtrl)
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))


app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

app.post("/maps", async (req, res)=> {
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=${req.body.searchString}&types=establishment&location=40.76999,-74.44696&radius=500&key=AIzaSyBPFyfOvU96xoIgsYr5aN-ANWB-qihk2Uo`)
    console.log(req.body)
    res.json(data)
})

// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})