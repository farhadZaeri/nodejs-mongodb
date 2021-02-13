module.exports=(app)=>{
    app.use((req,res,next)=>{
        res.status(402).send('address is wrong')
    })
}