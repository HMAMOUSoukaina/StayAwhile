import './SignInPageStyles.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
function SignUpPage(){
    return(
        <div className="page_entiere">
        <div className="wrapper">
            <form action="">
                <h1>Sign up</h1>
                <div className="input-box">
                    <input type="text" placeholder="UserName" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                    <MdEmail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="phone" placeholder="Phone" required/>
                    <FaPhoneFlip className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
        </div>       
                
               
    )
}
export default SignUpPage;        