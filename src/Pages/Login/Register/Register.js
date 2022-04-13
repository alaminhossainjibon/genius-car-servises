import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = e => {
        e.preventDefault();
    }


    return (
        <div className='register-form'>
            <h2 className='text-primary text-center my-2'>Please Register: </h2>
            <form onClick={handleRegister}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" name="name" id="" placeholder='Your name' />
                <label htmlFor="email">Your Email:</label>
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;