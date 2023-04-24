const mongodb = require('mongodb');
const client =mongodb.MongoClient;
const url='mongodb://127.0.0.1:27017'
client.connect(url,(err,db)=>{
    console.log('err',err);
    console.log('db',db);
    const mydb=db.db('egitimdb')
    mydb.createCollection('deneme').then((r)=>{
        console.log('r',r);
    })
})  