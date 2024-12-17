import React, { useContext, useState } from 'react';
import { login_contex } from './contex';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function C_login(props) {
    const navigate=useNavigate();
    
    const userD={
        username:String,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        password:String
    }
    const [user,setuser]=useState(userD);
    async function logi(){
        console.log("logi funtion");
        try {
            const res= await fetch('/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({user:user.username,pass:user.password})
            })


            

            const ress=await res.json();
            console.log(ress.result);
            if(ress.result){
                
                navigate("/home");
            }
            else{
                navigate("/");
            }
            
        } catch (error) {
            console.log(error);
            
        }
        console.log(user.username);
        
    }

  return (
    <login_contex.Provider value={{user,setuser,logi}}>
        {props.children}
    </login_contex.Provider>
    
  )
}
