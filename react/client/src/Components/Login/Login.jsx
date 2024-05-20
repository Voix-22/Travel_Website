import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../../App.css';
import video from '../../LoginAssets/travel.mp4';
import logo from '../../LoginAssets/logo.jpg';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Travel to your Wildest Dreams</h2>
            <p>Adopt the lifestyle of freedom!</p>
          </div>

          <div className='footerDiv flex'>
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>
          <form action="#" className='form grid'>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className='input flex'>
                <FaUserShield className="icon" />
                <input type="text" id='username' placeholder='Enter Username' />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className="icon" />
                <input type="password" id='password' placeholder='Enter Password' />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <a href="/dashboard"> Main Page</a>
          </form>
          <span className='forgotPassword'>
            Forgot your password? <a href="#">Click Here</a>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Login;
