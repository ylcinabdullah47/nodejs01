const express = require('express');
const {connectMongoDB}=require('./db');
const app = express();
const router = express.Router();
connectMongoDB();


// router.get('/',(req,res)=>{
//     res.status(200).send("burası get methodu")
// })


app.get('/',(req,res)=>{
    res.status(200).send("burası get methodu")
})

// app.post('/',(req,res)=>{
//     const user =new user({
//         name:"abdullah",
//         username:"yalçın",
//         age:22
//     });
//     user.save(()=>{
//         if (err) {
//             console.log(" kayıt yapılırken hata  oluştu");
//         }else{
//             console.log("kayıt edildi");
//         }
//     })
//     }
// )

app.post('/user',(req,res)=>{
    const newUser = new user(req.body);
    newUser.save(()=>{
        if (err) {
            console.log("kayıt başarısız oldu");
        }else{
            res.send("kayıt başarılı ")
        }
    })
})


app.listen(8000,()=>{
    console.log("8000 portu çalışıyor");
})