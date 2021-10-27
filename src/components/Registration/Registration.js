import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='login'>
            <div>
                <h2>Please Create an Account</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder='Your Name'/>
                    <br />
                    <input type="email" name="" id="" placeholder='Your Email'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Re-Enter Your Password'/>
                    <button>Submit</button>
                    
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    ----------------OR----------------
                    <br />
                    <button className='btn-regular'>Google Signin</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;