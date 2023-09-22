const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//test route
router.get('/welcome/:name', (req, res)=>{
  const name = req.params.name;
  res.send("Welcome " + name);
});

router.post('/send-email', async (req, res) => {
  const subject = 'inquiry';
  /*body: {
    name: firstName Last Name
    email: email
    message: message
  }
  */
  const { from, message } = req.body;
  await sendEmail(from, subject, message);
  res.json({ message: 'Email sent successfully' });
});

const sendEmail = async (from, subject, text) => {
  const mailOptions = {
    from,
    to: process.env.GMAIL_EMAIL,
    subject,
    text,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

module.exports = router;
