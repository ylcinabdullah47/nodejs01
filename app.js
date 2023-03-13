// // const http = require('http');

// // const server = http.createServer((req, res) => {
// //   res.writeHead(200);
// // res.write("<h1>selam ben geldim</h1>")
// //   res.end('giris basarili');
// // });

// // server.listen(3000, () => {
// //   console.log('Server listening on port 3000');
// // });

// //burası önemli 

// let http = require('http');
// let fs = require("fs");
// const server = http.createServer((req,res) =>{
//     if (req.url == "/") {
//         fs.readFile("index.html" , (err,html) => {
            
//             res.write(html);
//             res.end();
//             // res.write("<h1>selam index html hoş geldin</h1>")
//         });
//     } else if(req.url == "/urunler"){
//         fs.readFile("urunler.html" ,(err,html =>{
//             res.write(html);
//             res.end();
//         }));
       
//     }
//     else{
//         fs.readFile("404.html" , (err,html) => {
//             res.write(html); 
//             res.end();
//         });
      
//     }
//     // res.end();
    




//     res.writeHead(200);
//     res.write("giriş başarılı*******")
//     res.end("giriş başarsssslı*****")
// });
// server.listen(3000,() =>{
//     console.log("burası 3000 portu");
// } );





    // bu böüm expres denemessi olacak


// const express =require("express");
// const app = express();
// // routs yapısı (önemli)
// app.use("/urunler11/:id" ,function(req,res){
//     res.send("urunler11 id :" + req.params.id);
//     res.send();
// });

// app.use("/urunler" ,function(req,res){
//     res.send("urunler");
// });

// app.use("/" ,function(req,res){
//     res.send("anasayfa");
// });




// app.listen(3000, () =>{
//     console.log("listinig on porst 3000");
// });