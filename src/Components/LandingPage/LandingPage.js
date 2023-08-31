import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import './landing.scss'




const LandingPage = () => {
    const [loginemail, setLoginEmail] = useState("");
    const [passwordLogin, setLoginPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(""); 
    const Navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (loginemail === "admin123@gmail.com" && passwordLogin === "admin123") {
        setLoginStatus("Admin Login Successful");
        Navigate("/");
      } else {
        setLoginStatus("User Login Successful");
        Navigate("/home")
      }
    };
  
    return (
      <div className="maindiv">
        <h2>LogIn</h2>
        {loginStatus && <p className="login-status">{loginStatus}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input 
            type="email"
            placeholder="email"
            value={loginemail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type ="password"
            placeholder="password"
            value={passwordLogin}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
         
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/signup" className="signupp">Sign Up</Link>
          </p>
        </form>
      </div>
    );
  };
  
  export default LandingPage;
  
