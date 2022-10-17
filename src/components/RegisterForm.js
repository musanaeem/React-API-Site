import React, { useState } from 'react'

function RegisterForm(props) {

    const [credentials, setCredentials] = useState({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirmation: ''

    });
    const [formErrors, setFormErrors] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [results, setResults] = useState ({
        "username": false,
        "firstName": false,
        "lastName": false,
        "email": false,
        "passwords": false
    });


    const inputChanged = event => {

        //ask mentor
        const credentialChanged = credentials;
        credentialChanged[event.target.name] = event.target.value;

        setCredentials({
            [event.target.name]: event.target.value,
            ...credentials
        });

        console.log(credentials);
    }

    const register = event => {
        event.preventDefault();
        
        props.onRegister(credentials);
    }

    const validateUsername = () => {
        // In case there was already an error displayed
        clearError('username');
        // const usernameValue = credentials.username.trim();
        // setResults({
        //     username: isValidUsername(usernameValue)
        // });
        // unlockOrLockSubmit();
    }
    
    
    // Clears any errors that are displayed on a field already
    function clearError(input){
        setFormErrors({[input]:''});
        console.log(formErrors);
    }
    
    
    function isValidUsername(usernameValue){
        const usernameRegex = /^[\w-]+$/;
        const message = "Invalid username entered. Please only use a combination of alphanumeric, _ and -";
        return validationForUsernameOrName(usernameValue, 'username', usernameRegex, message);
    }
    
    
    function validationForUsernameOrName(value, input, regex, message){
        
        if (value.length < 3 || value.length > 15){
            setErrorFor(input, "The length should be 3-15 characters. please try again.");
            return false;
        }
    
        if(!regex.test(value)){
            setErrorFor(input, message);
            return false;
        }
    
        return true;
    }
    
    
    function setErrorFor(input, message){
    
        setFormErrors({[input]:message})
    }


    
    const validateEmail = () => {
        clearError('email');
    
        const emailValue = credentials.email.trim();
        //results['email']= isValidEmail(emailValue);
        unlockOrLockSubmit();
    }
    
    function isValidEmail(emailValue){
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(!emailRegex.test(emailValue)){
            setErrorFor('email', "Invalid Email. The email format entered is not valid.");
            return false;
        }
    
        return true;
    }
    
    
    const validatePasswords = () => {
        clearError('passwords');
    
        const passwordValue = credentials.password.value.trim();
        const passwordConfirmationValue = credentials.passwordConfirmation.value.trim();
       
        results['passwords'] = areValidPasswords(passwordValue, passwordConfirmationValue);
        unlockOrLockSubmit();
    }
    
    
    function areValidPasswords(passwordValue, passwordConfirmationValue){
        const passwordRegex = /(.*[0-9].*[!@#$%^&*()<>?/.,`~].*)|(.*[!@#$%^&*()<>?/.,`~].*[0-9].*)/;
    
            if(passwordValue !== passwordConfirmationValue){
                setErrorFor('passwords', "Password fields do not match. Please try again.");
                return false;
            }
            if(passwordValue.length < 6 || passwordValue.length > 15){
                setErrorFor('passwords', "Password length should be between 6 and 15 characters.");
                return false;
            }
            if(!passwordRegex.test(passwordValue)){
                setErrorFor('passwords', "Invalid password. Password should contain numbers and symbols.");
                return false;
            }
    
            return true;
    
    }
    

    function unlockOrLockSubmit(){
         setDisabled(!Object.values(results).every((result) => result));
    }


  return (
    <form action="">
        <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="username" placeholder="Username..." className="form-control" value={credentials.username} onChange={inputChanged} />
            <small className='usernameSmall'> {formErrors.username} </small>
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
            <input type="text" name="email" placeholder="Email..." className="form-control" value={credentials.email} onChange={inputChanged} />
            <small className='emailSmall'> {formErrors.email} </small>
        </div>
        
        
        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
            </div>
            <input type="date" name="date_of_birth" placeholder="Date of Birth..." className="form-control" value={credentials.date_of_birth} onChange={inputChanged}/>
        </div>
        
        
        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="password" placeholder="Password..." className="form-control" value={credentials.password} onChange={inputChanged} />
        </div>


        <div className="input-group mb-2">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" name="confirmPassword" placeholder="Confirm Password..." className="form-control" value={credentials.confirmPassword} onChange={inputChanged} />
            <small className='passwordSmall'> {formErrors.passwords} </small>

        </div>
        

        <p className="error"> {props.error} </p>

        <div className="d-flex justify-content-center mt-3 login-container">
          <input className="btn login-btn" type="submit" value="Register" onClick={register} disabled={disabled}/>
        </div>
      </form>
  )
}

export default RegisterForm
