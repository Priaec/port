const nodemailer = require('nodemailer')
require('dotenv').config()
const express = require('express')
const app = express()

//app
const cors = require('cors')

app.all('*', cors());

app.use(express.json());

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(3001, ()=>{
    console.log('Server Started');
});
