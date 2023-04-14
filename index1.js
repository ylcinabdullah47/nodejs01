const express = require('express');
const app = express();
const fs = require('fs');
const router= express.Router();
// app.use(express.static('style'))
// app.get('/',(req,res)=>{
//     res.status(200).send({message:"burası get methdou"})
// })

// app.get('/index',(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// });

// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname +'/home.html')
// });

// app.get('/test',(req,res)=>{
//     // res.sendFile(__dirname +'/test.html')
//     res.redirect('home')
// })

// app.get('/json',(req,res)=>{
//     // res.json({id:1,ad:"abdullah47"})
//     res.json([{id:47,adSoyad:"abdullah4747"},{id:49,adSoyad:"mehmtalikayn"},{id:999,adSoyad:"mehmet nuri"},{id:56,adSoyad:"yavuz selim"}])
// })



// app.get('/deneme',(req,res)=>{
//     res.status(200).send("deneme get")
// })
// app.post('/deneme',(req,res)=>{
//     res.status(200).send("deneme post")
// })

// app.put('/deneme',(req,res)=>{
//     res.status(200).send("deneme put ")
// })

// app.delete('/deneme',(req,res)=>{
//     res.status(200).send("deneme delete")
// })

app.use(router);

router.get('/',(req,res)=>{
    res.sendFile(__dirname +'/abc.html')
})
router.post('/',(req,res)=>{
    res.status(201).send("burası post")
})
router.put('/',(req,res)=>{
    res.send("burası put")
})
router.delete('/',(req,res)=>{
    res.send("burası delete")
})





app.listen(4000,()=>{
    console.log("4000 portu çalışıyor");
})