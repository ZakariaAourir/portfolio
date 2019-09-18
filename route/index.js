const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()

router.get('/', (req, res, next) => {
	res.render('index')
})

router.post('/send', (req, res, next) => {
	// send mail with defined transport object
	console.log(req.body)
	const output = `
    <p>you have new contact</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	})

	// setup email data with unicode symbols
	let mailOptions = {
		from: 'zakaria1997aourir@gmail.com', // sender address
		to: 'zaourir97@gmail.com', // list of receivers
		subject: 'Consulting', // Subject line
		text: 'message content: ', // plain text body
		html: output // html body
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error)
		}
		console.log('Message sent: %s', info.messageId)

		res.redirect('/')
	})
})
module.exports = router
