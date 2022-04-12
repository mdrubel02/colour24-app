import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignIn.css"
import img from "../../image/bg.jpg"
import piyas from "../../image/piyas.jpg"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { Spinner } from 'react-bootstrap';





const SignIn = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const navigate =useNavigate()

    const [ signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth)


    const handleEmailBlur=(event)=>{
       setEmail(event.target.value);
    }
    const handlePasswordBlur=(event)=>{
       setPassword(event.target.value);
    }
    const handleSignIn=(event)=>{
       event.preventDefault();
       signInWithEmailAndPassword(email,password)
    }
    if(loading){
        return(
            <div className='spinner'>
                <Spinner animation="border" variant="success" >
                <span className="visually-hidden"></span>
                </Spinner>
            </div>
        )
    }
    if(user){
        navigate('/Home')
    }
  

    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='container'>
            <div className="login-wrapper ">
                <form onSubmit={handleSignIn} className='form text-center'>
                    <img src={piyas} alt="" />
                    <h2>LOGIN HERE</h2>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name="loginUser" id="loginUser" placeholder='Email' required/> <br />
                        
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="loginPassword" id="loginPassword" placeholder='Password' required /> <br />
                        
                    </div>
                    <p>{error?.message}</p>
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