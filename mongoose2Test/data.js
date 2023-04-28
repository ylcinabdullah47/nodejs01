const mongoose = require('mongoose');
 const url ='mongodb://127.0.0.1:27017/test';

 mongoose.connect(url,{
    useNewUrlParser: true
 
 });
 // Bağlantıyı test et
 const db = mongoose.connection;
 db.on('error',console.error.bind(console,'connection error'))
 db.once('open',()=>{
    console.log("mongo db bağlantı başarılı");
 });

 //şema oluşturma

 const schema =mongoose.Schema;
 const mySchema = new schema({
    name:String,
    age:Number,
    email:String
   
 })
 //bir model oluştur
  const myModel =mongoose.model('mymodel',mySchema)

  

  //dışarı aktar baaşka yerde kullan

  module.exports=myModel;