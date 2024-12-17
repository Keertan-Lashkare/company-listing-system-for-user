import React, { useEffect, useState } from 'react'
import "../css/home.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Home() {
   const navigate = useNavigate();
   const [data,setdata] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/show");
          setdata(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

    

    async function comdelete(cid){
      console.log(cid);
      try {
         await axios.post("http://localhost:5000/delete", {comid:cid} ).then((result) => {
            console.log(result.data);
            window.location.reload();
            
         }).catch((err) => {
               console.log("server side error")
         });
         
       
       } catch (error) {
         console.error("Error fetching data:", error);
       }
    }


    function comupdate(cid){
      console.log(cid);
      navigate(`/update/cid/${cid}`);
    }

    function singout(){
      navigate('/');
    }

    function insert(){
      navigate('/insert');
    }
    
    

  return (
      <>
          <div className='navbar'> <input type='button' className='logout-btn' value="Log Out" onClick={singout}></input></div>
          <div className='home-page'>
        <div className='new-com'>
            <input type="button" value="+" className='home-btn' onClick={insert}></input>
        </div>
        {data.map((com,index)=>{

               return <div className='com-box' key={com.comid}>
           <input type='button' className='com-box-btn-delete' value="X" onClick={()=> comdelete(com.comid)}></input> 
           <label id='label-home'>company name :{com.companyname}</label>
           <label id='label-home'>contact person name :{com.cpname}</label>
           <label id='label-home'>contact person email : {com.cpemail}</label>
           <label id='label-home'>contact person mobile :{com.cpmobile}</label>
           <label id='label-home'>company address : {com.comaddress}</label>
           
           <input type='button' className='com-box-btn-update' value="Update" onClick={() => comupdate(com.comid)} ></input>
                  
           
           
        </div>

        })}
        
        
        
        
        
    </div>

      </>
      
  )
}
