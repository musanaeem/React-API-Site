import React, { Component } from 'react'
import LoginForm from '../components/LoginForm';
import '../components/Login.css';
import '../components/baseStyle.css';
import { Helmet } from 'react-helmet';


export default class LoginPage extends Component {

  render() {
    return ( 
        <div>

            <Helmet>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous"/>
            </Helmet>

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
