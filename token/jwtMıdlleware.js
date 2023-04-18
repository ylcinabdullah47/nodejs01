const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    if (!req.url.includes('/login')) {
        if (req.headers.authorization) {
            const t =req.headers.authorization.split('')[1]
       jwt.verify(t,'merhaba123*',(err,decode)=>{
           if (err) {
               console.log(err.message);
               res.send("token olmayan giremez")
           }
           req.user=decode
           // res.send("başarılı giriş")
           next();
         
       }) 
       }
       else{
           res.status(401).send({message:"hatalı girş"})
       }
    }else{
        next();
    }
  
   
}