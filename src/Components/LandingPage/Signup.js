import React,{useState} from "react";
import { Link} from "react-router-dom";
import './Signup.scss'


const SignUp =() =>{
    const [email ,setEmail] =useState("");
    const [password, setPassword]= useState("");
    const [phone, setPhone]=useState("");
    const [gender,setGender]=useState("");
    const [successMessage, setSuccessMessage]=useState("");




    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log('Sign up:`, email,password');
        
        setTimeout(() => {
            setSuccessMessage("Register Successfully,You can Login");
            setEmail('');
            setPassword('');
            setPhone('');
        },2000)

     };
     return(
        <div className="main">
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
            <input type="email"
            placeholder="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
             <input
             type="tel"
            placeholder="Phone No" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
             />
            <select className="genderSelect"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >

                <option value="">Select Gender</option>
                <option value="male">Male </option>
                <option value="female">female</option>
            </select>

            <button type="submit">Sign Up</button>
            <p className="ptag">Already have an account?
            <Link to="/">Login</Link>
            </p>
            </form>
            
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
     );
};

export default SignUp;