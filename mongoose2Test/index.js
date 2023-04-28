const express =require('express')
const myModel=require('./data')
const bodyParser=require('body-parser')
const app =express()

app.use(bodyParser.json());


app.get('/mydata',async(req,res)=>{
    try {
        const data =await myModel.find({});
        res.send(data)
    } catch (error) {
        res.status(500).send(err)
    }
})

app.post('/ekle',(req,res)=>{
    const kullanici = new myModel({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email
    });
    kullanici.save()
    .then(()=>{
        res.send( "kullanıcı başarılı eklendi")
    })
    .catch((err)=>{
        res.send("hata oluştu")
    })
})
//tüm verileri getirme
app.get('/get', async (req, res) => {
    try{
        const data = await myModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})



app.listen(4500,()=>{
    console.log("4500 portu çalışıyor");
})