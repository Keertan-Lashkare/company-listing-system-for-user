import React, { useContext, useState } from 'react';
import '../css/singup.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Sing() {
  // const a=useContext(sing_contex);
  const navigate=useNavigate();

  const [data,setdata]=useState({
    id:Math.floor(Math.random() * 1000000) + 1 ,
    name:"",
    userid:"",
    password:"",
    email:""
  })
  

  const chan=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});  
  }
  const sin=async(event)=>{
    event.preventDefault();
    try {
        
      await axios.post("http://localhost:5000/sing",data).then((result) => {
        console.log(result.data.result);
          if(result.data.result==true){
            navigate("/");
          }
          else{
            console.log("sever error")
            navigate("/singup");
          }
  })


    } catch (error) {
      console.log(error)
    }
    

  }
  return (
    <div className='signup-outer-container'>
    <div className='signup-inner-container'>
        <form className='signup-inner' onSubmit={sin}>
        <input type='text' placeholder='name' className='user' name='name' onChange={chan}/>
        <input type='text' placeholder='UserId' className='userid' name='userid' onChange={chan}/>
        <input type='text' placeholder='Mobile / Email id' className='email' name='email' onChange={chan}/>
        <input type='text' placeholder='Password' className='pass' name='password' onChange={chan}/>            
       

        
        <input type='submit' className='btn' value='Sing up'/>

        </form>
        </div>
    </div>
  )
}
