const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

// port
const port = 3000

// init app
const app = express()

//routes
const index = require('../dist/route/index')
// view engine
app.set('views', path.join(__dirname, '../dist/views'))
app.set('view engine', 'pug')

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// moment
app.locals.moment = require('moment')
// static folder
app.set(express.static(path.join(__dirname, '../dist/public')))
app.use(express.static(path.join(__dirname, '../dist/public')))

app.use('/', index)
//running the port
app.listen(port, () => {
	console.log('server is running on port... ' + port)
})
