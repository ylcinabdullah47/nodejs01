const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const router = express.Router();
app.use(express.json())
router.post('/login',(req,res,next)=>{
    const {username,password}=req.body;
const token = jwt.sign({
    ad:username,
    id:Date.now(),
    issuer:'www.abc.com',
    audience:'abc.com'
},'merhaba123*',{expiresIn:'2h'})   
res.json({name:username,token})
})



router.get('/users',(req,res)=>{
    
    const t =req.headers.authorization.split('')[1]
    jwt.verify(t,'merhaba123*',(err,decode)=>{
        if (err) {
            console.log('err',err.name);
            console.log(err.message);
            res.send("token olmayan giremez")
        }
        res.send("başarılı giriş")
      
    })
    //   console.log('decode',decode);
})



app.use(router)
app.listen(5002,()=>{
    console.log("5002 portu çalışıyor");
})


