import React, { Component } from 'react'
import InputGroup from './InputGroup';

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
          <InputGroup  className="input-group mb-3"  icon="fas fa-user">
              <input type="text" name="email" placeholder="Email..." className="form-control" value={this.state.credentials.email} onChange={this.inputChanged}/>
          </InputGroup>

          <InputGroup  className="input-group mb-2"  icon="fas fa-key">
              <input type="password" name="password" placeholder="Password..." className="form-control" value={this.state.credentials.password} onChange={this.inputChanged}/>
          </InputGroup>

          <p className="error"> {this.props.error} </p>

          {this.props.successMessage && <p className='successMessage'> Registration Successful </p>}

          <div  className="d-flex justify-content-center mt-3 login-container">
              <input  className="btn login-btn" type="submit" value="Login" onClick={this.login}/>
          </div>
      </form>
    )
  }
}
