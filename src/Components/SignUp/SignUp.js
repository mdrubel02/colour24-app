import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import img from "../../image/bg.jpg"
import piyas from "../../image/piyas.jpg"
import { auth } from '../../firebase/firebase.init';
// import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // new setup
    const { signUpWithEmailAndPass, user } = useFirebase();

    // const [user] = useAuthState(auth)


    // const [createUserWithEmailAndPassword,loading] = useCreateUserWithEmailAndPassword(auth);

    console.log(name)
    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/Home', { replace: true })
    }
    //   if (loading) {
    //     return (
    //         <div>
    //             <Spinner animation="border" role="status">
    //                 <span className="visually-hidden"></span>
    //             </Spinner>
    //         </div>
    //     )
    // }
    const handleCreateUser = (event) => {
        event.preventDefault();
        console.log('click')
        if(name.length <5){
            error('5 ')
        }
        if (password !== confirmPassword) {
            setError('Your tow password dit not match')
            return;
        }
        if (password < 6) {
            setError('password must be six characters or longer')
            return;
        }
        if (email && password) {
            signUpWithEmailAndPass(name, email, password);
        } else {
            alert("Please enter  email or password");
        }

        // createUserWithEmailAndPassword(email, password)
    }
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='container'>
            <div className="login-wrapper ">
                <form onSubmit={handleCreateUser} className='form text-center'>
                    <img src={piyas} alt="" />
                    <h2>REGISTRATION HERE</h2>
                    <div className="input-group">
                        <input onBlur={handleNameBlur} type="text" name="loginUser" id="loginUser" placeholder='Enter Name Here' required /> <br />
                    </div>
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name="loginEmail" id="loginEmail" placeholder='Enter Email Here' required /> <br />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="loginPassword" id="loginPassword" placeholder='Password' required /> <br />
                    </div>
                    <div className="input-group">
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="loginPassword" id="loginPassword" placeholder='Confirm Password' required /> <br />
                        <p style={{ color: 'red' }}>
                            {error}
                        </p>

                    </div>

                    <input type="submit" value="REGISTRATION" className='submit-btn' />
                    <p className='link'>You have a account.? <br />
                        <Link to="/">Place Login!</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default SignUp;