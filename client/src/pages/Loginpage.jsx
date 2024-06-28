import React from "react";

const Loginpage = () => {
  return (
    <div>
      <div className="container-box">
        <h1>Login</h1>
       
          <form className="login" action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
      
      </div>
    </div>
  );
};

export default Loginpage;
