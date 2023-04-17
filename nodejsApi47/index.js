console.log("hello");
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
let data = [
    { id:1,ad:"abdullah",soyad:"yalçın47"},
    {id:2,ad:"mustafa",soyad:"aktı" },   
    {id:3,ad:"ahmet",soyad:"bingül" }, 
    {id:4, ad:"emre",soyad:"acur"}   
   
]

router.get('/test',(req,res)=>{
    // res.send("deneme1")
    // res.json({ad:"mehmer"})
    res.sendFile(path.join(__dirname,'/nodejsApi47/5.png'))
})





router.get('/users-list',(req,res)=>{
//********************EK BİLGİ BUNU DAHA UZATABİLİRİZ FİKİR VERMESİ AÇISINDAN BİR KAÇ ÖRNEK */
    console.log("url",req.url);
    console.log("ctype",req.is('html'));
    console.log("hostname",req.hostname);
    console.log("ip",req.ip);

    res.status(200).json(data);
});

router.post('/users-create',(req,res)=>{
    const body =req.body;
    console.log(body);
    body.id=Date.now()
        data.push(body);
        res.status(201).json(data)
});

router.delete('/users-delete:userId',(req,res)=>{
    const userId = req.params.userId;
    const newArr= data.filter((user)=>{
        return user.id !== Number(userId) 
    });
    data = newArr;
    res.status(200).json({message:userId  +  "kayıt silindi"})
});

router.put('/users-update:userId',(req,res)=>{
    const body = req.body;
    const findedIndex = data.findIndex((user)=>{
      return  user.id === Number(req.params.userId)
    })
    data[findedIndex]={...body,id:req.params.userId}
    res.status(200).json(data[findedIndex])
    console.log(body);
    //güncelle
    //ve başarılı veriyi gönder
})

app.use(router)

app.listen(5000,()=>{
    console.log("5000 portu çalışıyor");
})


////////////////**************/ */
//swagger konusuna bakılacak