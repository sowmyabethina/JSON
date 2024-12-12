const Employe=require('../model/Employe')
const insertEmp=async(req,res)=>{
    const {name,role,sal}=req.body
    try{
        const obj=new Employe({name,role,sal})
        await obj.save()
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
module.exports={insertEmp}
