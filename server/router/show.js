import { Router } from "express";
import db from '../database.js'
const router=Router();


router.get('/',async (req,res)=>{
    console.log("this is show page");
    
    const sql="SELECT *FROM company";
    db.query(sql,(error,result)=>{

        if(error){
           return res.json({massage:error});
        }
        else{
            return res.json(result)
        }

    })
    


})

export default router;