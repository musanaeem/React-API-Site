import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';
import { useLocation, useNavigate } from 'react-router-dom';
import loginRequest from '../services/LoginRequest';
import FormContainer from '../components/FormContainer';


function LoginPage(props) {

    const location = useLocation();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    let isSuccessMessage = true;

    if(!location.state){
        isSuccessMessage = false;
    }

    const loginTag = () => {
        return(
            <LoginForm onLogin = {logUserIn} error={error}  successMessage = {isSuccessMessage}/>
        )
    }

    const logUserIn = (credentials) => {

        loginRequest(credentials).then( data => {
            if(!data.detail){
                window.localStorage.setItem('blogSiteUserLoggedIn',true);
                props.changeLoginState(true);
                navigate('/home');
              }
            else{
                setError(data.detail);
              }
        });
    }


  return (
    <div>
        <FormContainer form={loginTag} title='Login' alternateTitle='Register'  accountMessage='Dont have an have an account?' link='/register'/>
    </div>
  )
}

export default LoginPage