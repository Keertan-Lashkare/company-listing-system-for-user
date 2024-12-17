import { Router } from "express";
import db from '../database.js'
const router=Router();


router.post('/',async (req,res)=>{
    
    console.log("this is sing page");
    
    const sql="INSERT INTO usertable VALUES(?)";
    const value=[
        req.body.id,
        req.body.name,
        req.body.email,
        req.body.userid,
        req.body.password
    ]
    db.query(sql,[value],(error,result)=>{
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