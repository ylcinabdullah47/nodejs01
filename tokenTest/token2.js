const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Gizli anahtar
const secretKey = 'bir_gizli_anahtar';
// mongodb://localhost:27017
// Veritabanı bağlantısı
mongoose.connect('mongodb://127.0.0.1:27017/userdb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Veritabanına bağlandı.'))
.catch((err) => console.log(err));

// Kullanıcı modeli
const User = mongoose.model('User', {
  username: String,
  password: String,
  email: String
});
// Web token kontrolü için middleware
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.body.token || req.query.token;
    if (!token) res.send('Token bulunmamaktadır.');
    else {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) res.send('Token geçersizdir.');
        else {
          req.decode = decoded;
          next();
        }
      });
    }
  };
  
  // Kullanıcı kayıt rotası
  app.post('/register', async (req, res) => {
    const {username, password, email} = req.body;
    // Parolayı şifrele
    const hashedPassword = await bcrypt.hash(password,String,8);
    // Yeni kullanıcı oluştur
    const user = new User({
      username,
      password: hashedPassword,
      email
    });
     // Veritabanına kaydet
  user.save()
  .then(() => res.send('Kullanıcı kaydedildi.'))
  .catch((err) => res.send(err));
});

// Kullanıcı giriş rotası
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  // Veritabanından kullanıcıyı bul
  const user = await User.findOne({username});
  if (!user) res.send('Kullanıcı bulunamadı.');
  else {
    // Parolayı karşılaştır
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) res.send('Parola yanlış.');
    else {
      // Web token oluştur
      const payload = {username};
      const token = jwt.sign(payload, secretKey, {expiresIn: '1h'});
      // Web tokeni gönder
      res.json({token});
    }
  }
});
// Yetkili işlem rotası
app.get('/profile', verifyToken, (req, res) => {
    // Web token içindeki kullanıcı adını al
    const username = req.decode.username;
    // Veritabanından kullanıcıyı bul
    User.findOne({username})
    .then((user) => {
      // Kullanıcı bilgilerini gönder
      res.json(user);
    })
    .catch((err) => res.send(err));
  });
  
  // Sunucuyu başlat
  app.listen(3000, () => console.log('Sunucu çalışıyor.'));