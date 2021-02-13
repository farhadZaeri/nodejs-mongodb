const myModel = require("./database")


    const saveData= (app)=>{
       
    app.post('/',(req,res)=>{

        const user = {
            "name":req.body.name,
            "family":req.body.family
        }

        new myModel(
           { name: user.name, family: user.family}
       ).save()
    
       myModel.find({},(err, docs)=> {
           if (err) { console.error(err);
        }else{
            res.send({
                "message": "openshift container platform",   
                "users":docs
            })
        }
          
         });
    })
    }

    module.exports = saveData