import React, { useContext, useState } from 'react';
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
  const navigate=useNavigate();

    
    const [user,setuser]=useState({
      userid:'',
      password:''
    })
    const [err,seterr]=useState(" ")
    
    
    console.log(user);

    const chann=(e)=>{
      try {
        setuser({...user,[e.target.name]:e.target.value})
      } catch (error) {
        console.log("erroororor");
        console.log(error)
      }
      

    }
   async function sub(event) {
      event.preventDefault();
      try {
        
        await axios.post("http://localhost:5000/login",user).then((result) => {
          console.log(result.data.result);
            if(result.data.result==true){
              navigate("/show");
            }
            else{
              seterr("Wrong username or password.")
            }
       })
  
  
      } catch (error) {
        console.log(error)
      }
    } 
    


    function sing(){
            navigate("/singup")
    }

  

  
  return (

       <div className='login-outer-container'>
        <div className='login-inner-container'>
        <form className='inner-container'onSubmit={sub}>
        <input type='text' placeholder='Username' className='user-login' name='userid' onChange={chann}/>
        <input type='text' placeholder='Password' className='login-pass' name='password'  onChange={chann} />
        
        <label className='login-error'>{err}</label>
        <input type='submit' className='login-btn' value='Login'/>
        <input type='button' className='sing-btn' value='Sing Up' onClick={sing}/>

        </form>
        </div>
    </div>

  )
}
