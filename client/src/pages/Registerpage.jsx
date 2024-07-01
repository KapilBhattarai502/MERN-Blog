import React from 'react'
import { useState } from 'react';

const Registerpage = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[responsemsg,setResponsemsg]=useState('');
  const register=async(event)=>{
    event.preventDefault();

    const response=await fetch('http://localhost:8000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},


    })
    if(response.status===200){
      const msg="Sucessfully registered!!!"
      setResponsemsg(msg);
      setTimeout(()=>{
        setResponsemsg('');
      },1500);
      setUsername('');
      setPassword('');
    }
    else{
      alert('Username Already Taken');
    }
   
  }
  return (
    <div>
        <div className="container-box">
        <h1>Register</h1>
       
          <form className="register" onSubmit={(event)=>{register(event)}}>
          <input type="text" placeholder="Username" value={username} onChange={(event)=>{
              setUsername(event.target.value);

            }} />
           <input type="password" placeholder="Password" value={password} onChange={(event)=>{
              setPassword(event.target.value);
            }} />
            <button type='submit'>Register</button>
          </form>
          <div className='responsemsg'>{responsemsg}</div>
      
      </div>
    </div>
  )
}

export default Registerpage