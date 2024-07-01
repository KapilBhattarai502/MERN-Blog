import React, { useState } from "react";
import {Navigate} from 'react-router-dom';

const Loginpage = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect]=useState(false);
 

 const login =async(event)=>{
  event.preventDefault();
 

  const response=await fetch("http://localhost:8000/login",{
    method:'POST',
    body:JSON.stringify({username,password}),
    headers:{'Content-Type':'application/json'},
    credentials:'include'


  })
  if(response.status===200){
    setRedirect(true);
    

   
  
    }
  else{
    alert("You have entered a wrong password");
    
  }



}
if(redirect){
  return <Navigate to={'/'}/>
}



  return (
    <div>
      <div className="container-box">
        <h1>Login</h1>
       
          <form className="login" onSubmit={login}>
            <input type="text" placeholder="Username" value={username} 
            onChange={(event)=>{
              setUsername(event.target.value) 
            } } required />
            <input type="password" placeholder="Password" value={password}
             onChange={(event)=>{
              setPassword(event.target.value);
             }} required/>
            <button type="submit">Login</button>
          </form>
         
      
      </div>
    </div>
  );
};

export default Loginpage;
