import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import logo from '../../image/logo.png'
import './HomeHeader.css'

import { auth } from '../../firebase/firebase.init';
// import useFirebase from '../../Hooks/useFirebase';

// import { Link } from 'react-router-dom';


const HomeHerder = () => {
    const [user] = useAuthState(auth)
    // const {user,} = useFirebase(); 
    console.log(user?.displayName)
    const navigate = useNavigate()

    console.log(user);


    const handleSignOut = () => {
        console.log('click')
        signOut(auth);
    }

    if (!user) {
        navigate('/')
    }

    return (
        <div >
            <div className="row bg-dark">
                <div className="col-sm-6 col-lg-6 col-6">
                    <div className='balance d-flex justify-content-start align-items-center px-5 '>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <span className='text-success fs-4 '>{user?.displayName}</span>
                            <span className='text-success fs-6'>Balance: 0.00 tk</span>
                        </div>

                        {/* <button onClick={handleSignOut} className='btn btn-lg text-withe bg-success  mt-2'>Sign Out</button> */}
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-6">
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        {/* <img src={logo} width='50px' alt="" /> */}
                        <button onClick={handleSignOut} className='btn btn-lg text-withe bg-success  mt-2'>Sign Out</button>
                    </div>
                 
                </div>
            </div>

          



        </div>
    );
};

export default HomeHerder;