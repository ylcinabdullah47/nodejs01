const mongoose = require('mongoose');

exports.connectMongoDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("bağlantı başarılı test data bağlı");  
    } 
      
    catch (error) {
        console.log("veri tabanı bağlanırken hata oluştu");
        throw new Error(error)
    }
};

// şema oluşur
const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    age:Number
});

// model oluştur(veri tabanında user isimli colleciton oluşturdu)

const user =mongoose.model('user',userSchema)
