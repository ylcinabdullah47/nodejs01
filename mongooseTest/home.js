const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// Veri tabanı bağlantısı
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});

// Veri şeması
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Veri modeli
const User2 = mongoose.model('User2', userSchema);

// Tüm kullanıcıları getirme
// app.get('/users', function(req, res) {
//   User2.find(function(err, users) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(users);
//     }
//   });
// });


// app.get('/users',(req,res)=>{
//     User2.find((err,users)=>{
//         if (err) {
//             console.log("verileri yüklenirken hata oluştu");
//         }else{
//             res.json(users)
//         }
//     })
// })
// Yeni bir kullanıcı oluşturma



// tüm kullancıları listeleme


app.post('/test',(req,res)=>{
    const user = new user2({
        name:req.body.name,
        age:req.body.age
    });
    user.save((err)=>{
        if (err) {
            res.status(500).send({message:"kayıtbaşarısız oldu"})
        }else{
            res.send({message:" kayıt başarılı47"})
        }
    })
})




app.post('/users', (req, res)=> {
  const newUser = new User2(req.body);
  newUser.save((err)=> {
    if (err) {
      res.send({message:"kayıt başarısız"});
    } else {
      res.send({message: 'Kullanıcı başarıyla oluşturuldu.'});
    }
  });
});

// Kullanıcı güncelleme
app.put('/users/:id', function(req, res) {
  User2.findByIdAndUpdate(req.params.id, req.body, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send({message: 'Kullanıcı başarıyla güncellendi.'});
    }
  });
});
// Kullanıcı silme
app.delete('/users/:id', function(req, res) {
    User2.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send({message: 'Kullanıcı başarıyla silindi.'});
      }
    });
  });
  
  // Sunucuyu dinleme
  app.listen(3000, ()=> {
    console.log('Sunucu çalışıyor...');
  });