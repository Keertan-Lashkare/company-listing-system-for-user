import { Router } from "express";
import db from '../database.js'
const router=Router();


router.post('/',async (req,res)=>{
    console.log("this is login page");
    const {userid,password}=req.body;
    
    const query = 'SELECT * FROM usertable WHERE userid = ? AND password = ?';
    db.query(query, [userid, password], (err, results) => {
      
            console.log(err)
            console.log(results)
      if (results.length > 0) {
        return  res.json({result:true})
      } else {
        
        return res.json({result:false})
      }
    });


})

export default router;