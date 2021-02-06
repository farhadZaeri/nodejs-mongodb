const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const app = express()
const myModel = require("./database")

app.use(bodyparser.json())
app.get('/',(req,res)=>{
     new myModel(
        { name: 'Frodo', name: 'Frodon'}
    ).save()


    myModel.find({},(err, docs)=> {
        if (err) return console.error(err);
        res.send(docs)
      });
   
    
})

app.listen(process.env.PORT ,()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})