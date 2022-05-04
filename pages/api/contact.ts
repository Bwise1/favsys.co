export default function Contact(req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.mailgun.org",
    auth: {
      user: process.env.username,
      pass: process.env.password,
    },
    secure: true,
    logger: true,
    debug: true,
  });
  const mailData = {
    from: req.body.email,
    to: "info@favsys.co",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
  });
  //res.status(200);
}
