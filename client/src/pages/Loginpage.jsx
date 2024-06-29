import React, { useState } from "react";

const Loginpage = () => {

  return (
    <div>
      <div className="container-box">
        <h1>Login</h1>
       
          <form className="login" onSubmit={()=>{}}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
          </form>
      
      </div>
    </div>
  );
};

export default Loginpage;
