const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const app = express()
 const myModel = require("./database")
const router = require('./auth')

app.use(bodyparser.json())

app.use(router)
 app.get('/',(req,res)=>{
     new myModel(
        { name: 'Frodo', family: 'Frodon'}
    ).save()


    myModel.find({},(err, docs)=> {
        if (err) return console.error(err);
        res.send(docs)
      });
})
require('./402')(app)

app.listen(process.env.PORT ,()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})