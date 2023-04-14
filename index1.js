const express = require('express');
const app = express();
const appRouter=require('./Router/router')
app.use(appRouter);





app.listen(4000,()=>{
    console.log("4000 portu çalışıyor");
})