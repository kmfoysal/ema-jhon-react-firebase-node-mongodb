import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const {signInWithGoogle} = useAuth();
    
    // For redirect expected page 
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/shop'

    const handleGoogleLogin = (event) =>{
        event.preventDefault();
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_url)
        })
    }
    return (
        <div className='login'>
            <div>
                <h2>Please Sign In</h2>
                <form onSubmit=''>
                    <input type="email" placeholder='Your Email'/>
                    <br />
                    <input type="password" placeholder='Your Password'/>
                    <button>Login</button>                    
                    <p>New To Ema-Jhon ? <Link to='/register'>Create Account</Link></p>
                    ----------------OR----------------
                    <br />
                    <button 
                    onClick={handleGoogleLogin}
                    className='btn-regular'
                    >Google Signin</button>
                </form>
            </div>
        </div>
    );
};

export default Login;