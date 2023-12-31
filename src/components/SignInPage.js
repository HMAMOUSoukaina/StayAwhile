import React from 'react'
import  './SignInPageStyles.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import  { Link } from 'react-router-dom';
function SignInPage(){
    return(
        <div className="page_entiere">
        <div className="wrapper">
            <form action="">
                <h1>Sign in</h1>
                <div className="input-box">
                    <input type="text" placeholder="UserName" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label ><input type="checkbox" />Remember me</label>
                    <a href="/forgot_pass">Forgot password</a>
                </div>
                <button type="submit">Sign in</button>
                <div className="register-link">
                    <p>Don't have an account ? 
                        <Link to="/signup" className="signup">Sign up</Link>
                    </p>
                </div>
            
            </form>
        </div>
        </div>
    )
}
export default SignInPage;