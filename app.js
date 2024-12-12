const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const bodyparser=require('body-parser')
const router=require('./routers/empRoutes')
const app=express()
dotenv.config()
mongoose.connect(process.env.URI)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log("Error",err)
})
app.use(bodyparser.json())
app.use('/',routes)
app.listen(5050,()=>{
    console.log("server started")
})