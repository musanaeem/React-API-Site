import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';
<<<<<<< HEAD
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
=======
import { useNavigate } from 'react-router-dom';
import loginRequest from '../services/LoginRequest';

class LoginPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            error: ''
        }
    }

    logUserIn = (credentials) => {
>>>>>>> main

        loginRequest(credentials).then( data => {
            if(!data.detail){
                window.localStorage.setItem('blogSiteUserLoggedIn',true);
<<<<<<< HEAD
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
=======
                this.props.changeLoginState(true);
                this.props.navigator('/home');
              }
            else{
                this.setState({
                  error: data.detail
                })
              }
        });
    } 
    
    

  render() {
    return ( 
        <div>

            <div className="container h-100">

                <div className="d-flex justify-content-center h-100">
                    <div className="user-card">
                        <div className="d-flex justify-content-center">
                            <h3 className="form-title">LOGIN</h3>
                        </div>

                        <div className="d-flex justify-content-center form-container">
                            <LoginForm onLogin = {this.logUserIn} error={this.state.error}/>
                        </div>

                        <div className="mt-4">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? <a href="{% url 'register' %}" className="ml-2">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export function LoginWrapper(props){
    const navigator = useNavigate();
    return (<LoginPage navigator={navigator}  changeLoginState={props.changeLoginState}></LoginPage>)
  }

export default LoginPage;
>>>>>>> main
