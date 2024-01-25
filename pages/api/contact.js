export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'noreply@notqwerty.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'noreply@notqwerty.com',
    to: 'bassitnazir@gmail.com',
    subject: `Message From ${req.body.name}`,
    text:"Client Name: " + req.body.name + "\n" +   "Client Email: " + req.body.email + "\n" + "Client Number: " + req.body.tel  + "\n" + "Type of event : " + req.body.type + "\n"  + "Date: " + req.body.date + "\n" + "More Details: " + req.body.subject + "\n" 
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}