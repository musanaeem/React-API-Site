import React, { Component } from 'react'
import CSRFToken from './csrftoken'

export default class LoginForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        }
    }


    inputChanged = event => {
        const credentials = this.state.credentials;
        credentials[event.target.name] = event.target.value;
        this.setState({credentials: credentials});
    }
    

    login = event => {
        event.preventDefault();
        this.props.onLogin(this.state.credentials);
    }

  render() {
    return (
      <form action="">
        <CSRFToken />
        
        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text"> <i className="fas fa-user"></i> </span>
          </div>

          <input type="text" name="email" placeholder="Email..." className="form-control" value={this.state.credentials.email} onChange={this.inputChanged}/>
        </div>

        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text"><i className="fas fa-key"></i></span>
          </div>

          <input type="password" name="password" placeholder="Password..." className="form-control" value={this.state.credentials.password} onChange={this.inputChanged}/>
        </div>

        <p id="error"> {this.props.error} </p>

        <div id="login-container" className="d-flex justify-content-center mt-3 login-container">
          <input id="login-btn" className="btn login-btn" type="submit" value="Login" onClick={this.login}/>
        </div>
      </form>
    )
  }
}