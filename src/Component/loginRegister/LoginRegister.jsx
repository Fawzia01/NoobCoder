import React, { useState } from "react";
import './LoginRegister.css'
import { FaUser,FaLock, FaEnvelope, FaHome,FaFacebookF,FaPhone,} from "react-icons/fa";

const LoginRegister = () => {

    const [action, setAction] =useState('');

    const signupLink = ()  => {
        setAction('active');
    };
    const loginLink = () =>{
        setAction('');
    };
    return(
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder="Username"required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Password"required/>
                        <FaLock className="icon"/>
                    </div>

                    <div className="remember-forgot">
                        <label> <input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="signup-link">
                        <p>Don't have an account?<a href="#" onClick={signupLink}>Sign-Up
                            </a></p>
                    </div>
                </form>
            </div>

            <div className="form-box sign-up">
                <form action="">
                    <h1>Sign-Up</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder="Name" required/>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="text" 
                        placeholder="Username" required/>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" 
                        placeholder="Email" required/>
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="address" 
                        placeholder="Present Address" required/>
                        <FaHome className='icon' />
                    </div>
                    <div className="side-by-side">
    <div className="input-box half">
        <select id="department" required>
            <option value="" disabled selected>Department</option>
            <option value="CSE">CSE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>

        </select>
    </div>

    <div className="input-box half">
        <select id="batch" required>
            <option value="" disabled selected>Batch</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
                    </div>
                    </div>
                    <div className="input-box">
                        <input type="stuid" 
                        placeholder="Student ID" required/>
                    </div>
                    <div className="input-box">
                        <input type="fbid" 
                        placeholder="Facebook ID" required/>
                        <FaFacebookF className='icon' />
                    </div>                    
                    <div className="input-box">
                        <input type="interest" 
                        placeholder="Interest" required/>
                    </div>
                    <div className="input-box">
                        <input type="phn" 
                        placeholder="Phone Number" required/>
                        <FaPhone className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Password" required/>
                        <FaLock className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder="Confirm Password" required/>
                        <FaLock className='icon'/>
                    </div>
                    
                    <div className="remember-forgot">
                        <label> <input type="checkbox"/>I agree to the terms & conditions</label>
                    
                    </div>

                    <button type="submit">Sign-up</button>

                    <div className="login-link">
                        <p>Already one of us?<a href="#" onClick={loginLink}>Login
                            </a></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LoginRegister