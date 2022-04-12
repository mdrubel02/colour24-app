import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/logo.png'
import './HomeHeader.css'

import { auth } from '../../firebase/firebase.init';
import useFirebase from '../../Hooks/useFirebase';

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
            <div className="bar">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} width='50px' alt="" />
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <div className='balance d-flex  justify-content-center align-items-center px-5 '>
                                <p className='text-success fs-3 px-3'>{user?.displayName}</p>
                                <p className=' fs-6 text-success '>Balance: 0.00 tk</p>
                            </div>
                            <div>
                            <Button className='bg-success mt-2' onClick={handleSignOut} >Sign Out</Button>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </div>


        </div>
    );
};

export default HomeHerder;