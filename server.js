const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const app = express()


app.use(bodyparser.json())
app.get("/",(req,res)=>{
    res.send('nodejs+mongoDB is running on openshift container by Farhad zaeri')
})
require('./model')(app)
require('./402')(app)

app.listen(process.env.PORT ,()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})