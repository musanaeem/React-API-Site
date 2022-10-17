import React, { Component } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';
import { Link } from 'react-router-dom';


export default class LoginPage extends Component {

  render() {
    return ( 

        <div className="container h-100">

            <div className="d-flex justify-content-center h-100">
                <div className="user-card">
                    <div className="d-flex justify-content-center">
                        <h3 className="form-title">LOGIN</h3>
                    </div>

                    <div className="d-flex justify-content-center form-container">
                        <LoginForm onLogin = {this.props.onLogin} error={this.props.error}/>
                    </div>

                    <div className="successMessage">
                        <p>{this.props.successMessage}</p>
                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to='/register' className="ml-2">Sign Up </Link>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
  }
}
