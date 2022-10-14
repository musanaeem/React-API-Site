import React, { Component } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';

export default class LoginPage extends Component {

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
                            <LoginForm onLogin = {this.props.onLogin} error={this.props.error}/>
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
