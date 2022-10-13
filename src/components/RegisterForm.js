import React, { useState } from 'react'
import CSRFToken from './csrftoken';

function RegisterForm(props) {

    const [credentials, setCredentials] = useState({});


    const inputChanged = event => {
        const credentialChanged = credentials;
        credentialChanged[event.target.name] = event.target.value;
        setCredentials(credentialChanged);
    }

    const register = event => {
        event.preventDefault();
        
        props.onRegister(credentials);
    }

  return (
    <form action="">
        <CSRFToken />

        <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="username" placeholder="Username..." className="form-control" value={credentials.email} onChange={inputChanged}/>
        </div>

        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-id-badge"></i></span>
            </div>
            <input type="text" name="firstName" placeholder="First Name..." className="form-control" value={credentials.firstName} onChange={inputChanged}/>
        </div>
              
              
        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-id-badge"></i></span>
            </div>
            <input type="text" name="lastName" placeholder="Last Name..." className="form-control" value={credentials.lastName} onChange={inputChanged}/>
        </div>


        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
            </div>
            <input type="text" name="email" placeholder="Email..." className="form-control" value={credentials.email} onChange={inputChanged}/>
        </div>
        
        
        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
            </div>
            <input type="date" name="dateOfBirth" placeholder="Date of Birth..." className="form-control" value={credentials.dateOfBirth} onChange={inputChanged}/>
        </div>
        
        
        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="password" placeholder="Password..." className="form-control" value={credentials.password} onChange={inputChanged}/>
        </div>


        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="confirmPassword" placeholder="Confirm Password..." className="form-control" value={credentials.confirmPassword} onChange={inputChanged}/>
        </div>
        

        <p id="error"> {props.error} </p>

        <div id="login-container" className="d-flex justify-content-center mt-3 login-container">
          <input id="login-btn" className="btn login-btn" type="submit" value="Login" onClick={register}/>
        </div>
      </form>
  )
}

export default RegisterForm
