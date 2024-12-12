const mongoose=require("mongoose")
const EmpSchema=new mongoose.schema({
    name:{type:String,required:true},
    role:{type:String,required:true},
    sal:{type:Number}
})
module.exports=mongoose.model('Employe',EmpSchema)