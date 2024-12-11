const fs= require('fs')
fs.readFile('abc.txt',(err,data)=>
{
    if(err) console.log(err);
    else console.log(data.toString())
})
fs.writeFile('xyz.txt',"heello world",(err)=>{
    if(err) console.log(err)
        else console.log("successfully updated")
})
fs.readFile('xyz.txt',(err,data)=>{
    if(err) console.log(err)
        else console.log(data.toString())
})
fs.unlink('xyz1.txt',(err)=>{
    if(err) console.log(err)
        else console.log("successfully deleted")
})
fs.rename('abc.txt','def.txt',(err)=>
{
    if(err) console.log(err)
        else console.log("renamed")
})
