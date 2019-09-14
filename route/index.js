const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

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
		host: 'smtp.sendgrid.net', // true for 465, false for other ports
		// debug: true,
		// logger: true,
		auth: {
			user: 'apikey', // generated ethereal user
			pass: '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' // generated ethereal password
		}
	})

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
