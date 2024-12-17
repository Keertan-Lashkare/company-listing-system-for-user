import { Router } from "express";
import db from '../database.js'
const router=Router();


router.post('/', (req,res)=>{
    console.log("this is delete page");
    
    const sql="DELETE FROM company WHERE comid = ?";
            
       const {comid}= req.body;
       
       console.log(comid)
    db.query(sql,[comid],(error,result)=>{

        

        if(error){
            console.log(error)
           return res.json({result:false})
        }
        else{
            return res.json({result:true})
        }

    })
    


})

export default router;