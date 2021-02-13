const jwt = require('jsonwebtoken')
const express = require('express')

const router = express.Router()

router.post('/',(req,res,next)=>{
  const users = {
    "name": req.body.name,
    "family": req.body.family
 }

 const getToken = req.headers['x-access-token']

console.log(getToken);
  jwt.verify(getToken,process.env.SECRET_KEY,(err,user)=>{
    if(err){     
      const accesToken= jwt.sign(users, 'secret', { expiresIn: '1h' })
      return res.send({
        "refreshToken":accesToken});              
  }else{
    res.send(getToken)
  }
   
  })
 })



module.exports = router
