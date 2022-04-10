import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mt-3'>
            <Link className='text-danger p-2 fs-4 text-decoration-none' to="/">Home</Link>
            <Link className='text-danger p-2 fs-4 text-decoration-none' to="/SignUp">Sign Up</Link>
            <Link className='text-danger p-2 fs-4 text-decoration-none'to="/SignIn">Sign In</Link>
        </div>
    );
}

export default Header;