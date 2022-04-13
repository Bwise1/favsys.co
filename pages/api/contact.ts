export default function Contact (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.mailgun.org",
        auth: {
            user: process.env.username,
            pass: process.env.password,
        },
        secure: true,
        logger: true,
        debug: true
    })
    const mailData = {
        from: 'info@favsys.co',
        to: 'oguntoyebenjamin2@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}
