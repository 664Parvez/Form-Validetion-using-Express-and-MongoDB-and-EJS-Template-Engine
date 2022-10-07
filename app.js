const express = require('express')
const app = express()

const getSignin = require('./routes/signin.route')
const getLogin = require('./routes/login.route')

app.set("view engine", "ejs")

// Static File
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css')) // Static CSS File Setup

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render("home")
})

app.use(getSignin)
app.use(getLogin)


app.get((req, res) => {
    res.json({ message : "404, Page is not found" })
})

module.exports = app


// Home Page Template