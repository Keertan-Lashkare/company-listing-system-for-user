import { Router } from "express";
import db from '../database.js'
const router=Router();


router.post('/',async (req,res)=>{
    
    console.log("this is update page");
    
  
    const sql="UPDATE company SET companyname = ?, cpname = ? , cpemail = ?, cpmobile = ?, comaddress = ? WHERE comid = ?"
    const value=[
        
        req.body.companyname,
        req.body.cpname,
        req.body.cpemail,
        req.body.cpmobile,
        req.body.comaddress,
        req.body.comid
    ]
    db.query(sql,value,(error,result)=>{
        console.log(result)

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