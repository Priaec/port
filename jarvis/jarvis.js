const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

//app
const cors = require('cors')

app.all('*', cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")))

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

//app.use(cors({ origin: 'http://jarvis:3000'}));
port = 3000 || 3001;

app.listen(port, ()=>{
    console.log(`Server Started on port: ${port}`);
});
