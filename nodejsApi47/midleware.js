const express = require('express');
const app = express()
const router = express.Router();

router.get('/',(req,res,next)=>{
    if (req.query.id ==3) {
        next()    
}else{
    res.send("id numarası 3 olan girebilir")
}

},(req,res)=>{
    res.send("hoşgeldiniz")
}
);

router.get('/test',(req,res,next)=>{
    res.send("selam")
});
router.get('/denem',(req,res)=>{
    res.send("burası deneme")
})


















//  BURADA TEMEL MİDLEWARE NASIL KULLANILIR ONUN DENEMESİ YAPILDI SONRUNSUZ ÇALIŞIYOR

// app.use((req,res,next)=>{

//     if (!req.url.includes('/denem')) {
//         if (req.query.ad==='ali') {
//             console.log("midleware 1 çalışıyor"); 
//             next();
//         }else{
//             res.send("adı ali olan geçebilir")
//         }
//     }
//     else{
//         next()
//     }
   
   
    
// });

// app.use((req,res,next)=>{
//     if (!req.url.includes('denem')) {
//          if (Number(req.query.yas) === 20) {
//          console.log("midleware 2 çalışıyor");
//     next()
//     }else{
//         res.send("yaşı 20 olan girebibilir")
//     }
//     }
//     else{
//         next();
//     }
   
   
// })









app.use(router)


app.listen(5050,()=>{
    console.log("5050 portu çalışıyor");
})