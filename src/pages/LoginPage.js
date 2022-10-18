import React, { Component, useState } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';
import { Link, useNavigate } from 'react-router-dom';


function LoginPage(props) {

    const [error, setError] = useState('');

    const loginTag = () => {
        return(
            <LoginForm onLogin = {logUserIn} error={error} />
        )
    }

    const logUserIn = (credentials) => {

        LoginRequest(credentials).then( data => {
            if(!data.detail){
                window.localStorage.setItem('blogSiteUserLoggedIn',true);
                props.changeLoginState(true);
                useNavigate('/home');
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