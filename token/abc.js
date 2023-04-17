console.log("test123");
const jwt = require('jsonwebtoken');
const token = jwt.sign({
    ad:'abdullah',
    soyad:'yalçın',
    id:47,
    issuer:'www.abc.com',
    audience:'abc.com'
},'merhaba123*',{expiresIn:'2h'})

console.log('token',token);

const t ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZCI6ImFiZHVsbGFoIiwic295YWQiOiJ5YWzDp8SxbiIsImlkIjo0NywiaXNzdWVyIjoid3d3LmFiYy5jb20iLCJhdWRpZW5jZSI6ImFiYy5jb20iLCJpYXQiOjE2ODE3Mzg4MTEsImV4cCI6MTY4MTc0NjAxMX0.v8uIt2hULQU8s0NHcRbFGUOG66kPH1LB9DbHpGgE5m8'

jwt.verify(t,'merhaba123*',(err,decode)=>{
    if (err) {
        console.log('err',err.name);
        console.log(err.message);
    }
    console.log('decode',decode);
})