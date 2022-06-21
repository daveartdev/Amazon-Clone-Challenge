/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const navigate = useNavigate ();
    //authentication
    const [email, setEmail] = useState ('');
    //const [tel, setTel] = useState ('');
    const [password, setPassword] = useState ('');


    //Button Commands
    const signIn = e => {
        e.preventDefault();
        auth 
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }


  return (
    <div className='login'>

        <Link to="/"> 
            <img
                className='login__logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            />
        </Link>

        <div className='login__container'>
            <h2>Sign-in</h2>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}
                 /*type="tel" value={tel} onChange={e => setTel(e.target.value)}*/ />
                
                
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button
                type='submit' 
                onClick={signIn}
                className='login__signInButton'> Continue</button>
            </form>

            <p>
                By continuing, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
        </div>

        <div className='registration'>
            <h6>New to Amazon?</h6>
            <button 
            
            onClick={register}
            className='login__registerButton'>Create your Amazon Account</button>
        </div>

    </div>
  )
}

export default Login
