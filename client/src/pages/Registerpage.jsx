import React from 'react'
import { useState } from 'react';

const Registerpage = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const register=async(event)=>{
    event.preventDefault();

    await fetch('http://localhost:8000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},


    })
  }
  return (
    <div>
        <div className="container-box">
        <h1>Register</h1>
       
          <form className="register" onSubmit={()=>register()}>
          <input type="text" placeholder="Username" value={username} onChange={(event)=>{
              setUsername(event.target.value);

            }} />
           <input type="password" placeholder="Password" value={password} onChange={(event)=>{
              setPassword(event.target.value);
            }} />
            <button type='submit'>Register</button>
          </form>
      
      </div>
    </div>
  )
}

export default Registerpage