import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Axios from 'axios';
import video from '../../LoginAssets/travel.mp4';
import logo from '../../LoginAssets/logo.jpg';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createUser = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        Axios.post('http://localhost:3002/register', {
            Email: email,
            Username: userName,
            Password: password
        })
            .then(() => {
                console.log('User has been created');
                // Optionally, you can redirect or show a success message here
            })
            .catch(error => {
                console.error('Error creating user:', error);
                // Optionally, handle error display or logging
            });
    };

    return (
        <div className='registerPage flex'>
            <div className='container'>

                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className='title'>Travel to your Wildest Dreams</h2>
                        <p>Adopt the lifestyle of freedom!</p>
                    </div>

                    <div className='footerDiv flex'>
                        <span className="text">Already have an account?</span>
                        <Link to={'/login'}>
                            <button className='btn'>Sign In</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flex'>
                    <div className='headerDiv'>
                        <img src={logo} alt="Logo" />
                        <h3>Create an Account!</h3>
                    </div>
                    <form action="#" className='form grid'>
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className='input flex'>
                                <MdMarkEmailRead className="icon" />
                                <input type="email" id='email' placeholder='Enter Email' onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className='input flex'>
                                <FaUserShield className="icon" />
                                <input type="text" id='username' placeholder='Enter Username' onChange={(event) => {
                                    setUsername(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className='input flex'>
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='password' placeholder='Enter Password' onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                            </div>
                        </div>
                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Register</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>
                    </form>
                    <span className='forgotPassword'>
                        Forgot your password? <a href="#">Click Here</a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Register;
