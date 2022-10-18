import React, { Component } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';
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

        loginRequest(credentials).then( data => {
            if(!data.detail){
                window.localStorage.setItem('blogSiteUserLoggedIn',true);
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