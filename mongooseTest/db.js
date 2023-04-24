const mongoose = require('mongoose');

exports.connectMongoDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log("bağlantı başarılı test data bağlı");  
    } 
      
    catch (error) {
        console.log('error',error);
        throw new Error(error)
    }
};