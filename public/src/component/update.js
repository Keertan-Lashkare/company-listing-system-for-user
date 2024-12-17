import React, { useEffect, useState } from 'react'
import "../css/update.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {

  const { e } = useParams();
  console.log(e);
  const navigate=useNavigate();
  const [emass,setemass]=useState(" ")
  const [data,setdata]=useState({
      comid: e,
      companyname:'',
      cpname:'',
      cpemail:'',
      cpmobile:'',
      comaddress:''
  })
 
    const save=async(e)=>{

      try {
        
        await axios.post("http://localhost:5000/update",data).then((result) => {
          console.log(result.data.result);
            if(result.data.result==true){
              navigate("/show");
            }
            else{
              console.log("sever error")
              navigate("/update");
            }
        })


      } catch (error) {
        console.log(error)
      }
       
    }
      
  return (
    <div className='update-page-div'>
        
        <div className='update-box'>
        
          <h1 className='update-box-h'></h1><br/><br/>
            <input id='input-update' type='text' placeholder='Company name ' className='update-company-name' onChange={e=>{setdata({...data,companyname:e.target.value})}}></input>
            <label id='input-update-error' className='com-name-error'></label><br/>
            <input id='input-update' type='text' placeholder=' contact person name ' className='update-com-name' onChange={e=>{setdata({...data,cpname:e.target.value})}}></input>
            <label id='input-update-error' className='com-p-name-error'></label><br/>
            <input id='input-update' type='text' placeholder='contact person email' className='update-com-email' onChange={e=>{setdata({...data,cpemail:e.target.value})}}></input>
            <label id='input-update-error' className='com-email-error'></label><br/>
            <input id='input-update' type='text' placeholder='contact person mobile' className='update-com-mobile' onChange={e=>{setdata({...data,cpmobile:e.target.value})}}></input>
            <label id='input-update-error' className='com-mobile-error'></label><br/>
            <input id='input-update' type='text' placeholder='Company address' className='update-company-address' onChange={e=>{setdata({...data,comaddress:e.target.value})}}></input>
            <label id='input-update-error' className='com-add-error'></label><br/>
            <input id='input-update' type='submit' className='update-btn' value="Update" onClick={save}></input>

        </div>
        
    </div>
  )
}
