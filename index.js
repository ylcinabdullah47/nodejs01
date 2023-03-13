// console.log("testt1");

//expres kullanımı alıştırma
// burada http server oluşturup doğru çalışmasını sağladık

 const express = require('express');
 const server = express();
 const data =require('./data.js');

 server.get("/" ,(req,res) =>{
    res.send("express selam")
   
 });

server.get("/aktorler",(req,res)=>{
    res.send("aktorler listesi")
    res.status(200).json(data);

});

server.get("/aktorler/:id" ,(req,res) =>{
    const { id } = req.params;
    const aktor =data.find(aktor => aktor.id === parseInt(id));

    if (aktor) {
        res.status(200).json(aktor);
    }
    else{
        res.status(404).res.send("bulunamadı tekrar dene");
    }
});


 server.listen(5000,(req,res)=>{
        console.log("5000 adresine gelen istekler dinleniyor")
 });
 


