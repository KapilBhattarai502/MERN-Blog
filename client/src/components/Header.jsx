import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'



const Header = () => {
  const[username,setUsername]=useState('');
useEffect(()=>{
    fetch("http://localhost:8000/profile",{
    credentials:'include',
  }).then((response)=>{
    response.json().then((userInfo)=>{
      setUsername(userInfo.username)




    })
  })
},[])
const logout=()=>{
  fetch('http://localhost:8000/logout',{
    credentials:'include',
    method:'POST'
  })

}

  return (
    <>
  
      <header>
        <Link to="/" className="logo">
          My Blog
        </Link>
        <nav>
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        ) }
        {!username && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          </>
        )}
          
        </nav>
      </header>
      

    </>
  )
}

export default Header