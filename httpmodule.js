const http=require('http')
const serv=http.createServer((req,res)=>
{
    res.write("hello ")
    res.end('hii world')
})
const port=3008;
const host='127.0.0.1';
serv.listen(port,host,()=>
{
    console.log(`server started`)
})