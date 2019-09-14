const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

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
	let transporter = nodemailer.createTransport(
		sgTransport({
			host: 'smtp.sendgrid.net',
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_API_KEY
			}
		})
	)

	// setup email data with unicode symbols
	let mailOptions = {
		from: 'zakaria1997aourir@gmail.com', // sender address
		to: 'zaourir97@gmail.com', // list of receivers
		subject: 'Node Contact Request', // Subject line
		text: 'message content: ', // plain text body
		html: output // html body
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error)
		}
		console.log('Message sent: %s', info.messageId)
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

		res.redirect('/')
	})
})
module.exports = router
