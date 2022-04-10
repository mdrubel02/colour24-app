import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import img from "../../image/bg.jpg"
import piyas from "../../image/piyas.jpg"

const SignUp = () => {
    const handleEmailBlur=(event)=>{
        console.log(event.target.value);
    }
    const handlePasswordBlur=(event)=>{
        console.log(event.target.value);
    }
    const handleConfirmPasswordBlur=(event)=>{
        console.log(event.target.value);
    }
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='container'>
            <div className="login-wrapper ">
                <form className='form text-center'>
                    <img src={piyas} alt="" />
                    <h2>REGISTRATION HERE</h2>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name="loginUser" id="loginUser" placeholder='Enter Email Here' required/> <br />
            
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="loginPassword" id="loginPassword" placeholder='Password' required /> <br />
                        
                    </div>
                    <div className="input-group">
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="loginPassword" id="loginPassword" placeholder='Confirm Password' required /> <br />
                       
                    </div>
                    <input type="submit" value="REGISTRATION" className='submit-btn' />
                    <p className='link'>You have a account.? <br />
                        <Link to="/SignIn">Place Login!</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default SignUp;