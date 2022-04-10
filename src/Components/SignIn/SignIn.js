import React from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css"
import img from "../../image/bg.jpg"
import piyas from "../../image/piyas.jpg"

const SignIn = () => {
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='container'>
            <div className="login-wrapper ">
                <form className='form text-center'>
                    <img src={piyas} alt="" />
                    <h2>LOGIN HERE</h2>
                    <div className="input-group">
                        <input type="email" name="loginUser" id="loginUser" placeholder='Email' required/> <br />
                        
                    </div>
                    <div className="input-group">
                        <input type="password" name="loginPassword" id="loginPassword" placeholder='Password' required /> <br />
                        
                    </div>
                    <input type="submit" value="LOGIN" className='submit-btn' />
                    <p className='link'>don't have a account.? <br />
                        <Link to="/SignUp">Place Create account!</Link>
                    </p>

                </form>
            </div>
        </div>

    )
}

export default SignIn;