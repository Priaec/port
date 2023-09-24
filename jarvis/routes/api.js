const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const axios = require('axios')

router.use(bodyParser.json());

//test route
router.get('/welcome/:name', (req, res)=>{
  const name = req.params.name;
  res.send("Welcome " + name);
});

router.post('/verifyUser', async(req,res)=>{
  const { recaptchaToken } = req.body;
  const key = process.env.RECAP_KEY;
  try{
    const url = `https://www.google.com/recaptcha/api/siteverify`
    const captchaResponse = await axios.post(url, null,
      {
        params:{
          secret: key,
          response: recaptchaToken
        },
      }
    )
    const { success } = captchaResponse.data;
    if(success == true)
      return res.status(200).json({ success: true, message: 'reCAPTCHA verification succeeded'})
    else
      return res.status(400).json({message: 'captcha validation failed'})
  }catch(err){
    return res.status(500).json({message: err.message})
  }
})

router.post('/send-email', async (req, res) => {
  const { from, message } = req.body;
  if(!validEmail(from))
    return res.status(400).json({ message: `Error: input: ${from} is not type email`})
  if(!validMessage(message))
    return res.status(400).json({message: `Error: input: ${message} is not type message`})
  const subject = 'inquiry';
  try{
    await sendEmail(from, subject, message);
    res.status(200).json({ message: 'Email sent successfully' });
  }catch(err){
    return res.status(400).json({message: err.message})
  }
});

const sendEmail = async (from, subject, message) => {
  const mailOptions = {
    from,
    to: process.env.GMAIL_EMAIL,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
};

const validEmail = (email) =>{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const validMessage = (message) =>{
  return (message.length && message.length > 1) ? true: false;
}

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

module.exports = router;
