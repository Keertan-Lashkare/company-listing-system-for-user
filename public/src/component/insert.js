import React, { useState } from 'react'
import "../css/insert.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Insert() {
  const navigate=useNavigate();
  const [emass,setemass]=useState(" ")
  const [data,setdata]=useState({
      comid:Math.floor(Math.random() * 1000000) + 1 ,
      companyname:'',
      cpname:'',
      cpemail:'',
      cpmobile:'',
      comaddress:''
  })
 
    const save=async(e)=>{

      try {
        
        await axios.post("http://localhost:5000/insert",data).then((result) => {
          console.log(result.data.result);
            if(result.data.result==true){
              navigate("/show");
            }
            else{
              console.log("sever error")
              navigate("/insert");
            }
    })


      } catch (error) {
        console.log(error)
      }
       
    }
      
      
  
  
  return (
    <div className='insert-page-div'>
        
        <div className='insert-box'>
        
          <h1 className='insert-box-h'></h1><br/><br/>
         
            <input id='input-insert'  type='text' placeholder='Company name ' className='insert-company-name' onChange={e=>{setdata({...data,companyname:e.target.value})}}></input>
            <label id='input-insert-error' className='com-name-error'>{emass}</label><br/>
            <input id='input-insert' type='text' placeholder=' contact person name ' className='insert-com-name' onChange={e=>{setdata({...data,cpname:e.target.value})}} ></input>
            <label id='input-insert-error' className='com-p-name-error'></label><br/>
            <input id='input-insert' type='text' placeholder='contact person email' className='insert-com-email' onChange={e=>{setdata({...data,cpemail:e.target.value})}}></input>
            <label id='input-insert-error' className='com-email-error'></label><br/>
            <input id='input-insert' type='text' placeholder='contact person mobile' className='insert-com-mobile' onChange={e=>{setdata({...data,cpmobile:e.target.value})}}></input>
            <label id='input-insert-error' className='com-mobile-error'></label><br/>
            <input id='input-insert' type='text' placeholder='Company address' className='insert-company-address' onChange={e=>{setdata({...data,comaddress:e.target.value})}}></input>
            <label id='input-insert-error' className='com-add-error'></label><br/>
            <input id='input-insert' type='submit' className='insert-btn' value="Save" onClick={save}></input>
           
        </div>
        
    </div>
  )
}
