const empcon=require('../control/Empcontrol')
const express = require('express')
const routes=express.Router()
routes.post('/add-emp',empcon.insertEmp)
module.exports=routes