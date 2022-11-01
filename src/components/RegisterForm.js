import React, { useState } from 'react'
import IsEmailValid from '../utils/EmailValidator';
import IsNameValid from '../utils/NameValidator';
import IsPasswordValid from '../utils/PasswordValidator';
import IsUsernameValid from '../utils/UsernameValidator';
import InputGroup from './InputGroup';

const RegisterForm = (props) => {

    const [credentials, setCredentials] = useState({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        date_of_birth: '',
        password: '',
        passwordConfirmation: ''

    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        passwords: ''
    });
    const [disabled, setDisabled] = useState(true);
    const [results, setResults] = useState ({
        "username": false,
        "firstName": false,
        "lastName": false,
        "email": false,
        "passwords": false
    });


    const inputChanged = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const register = event => {
        event.preventDefault();
        props.onRegister(credentials);
    }

    const validateUsername = () => {
        // In case there was already an error displayed
        clearError('username');
        const usernameValue = credentials.username.trim();
        let username_validity_result = IsUsernameValid(usernameValue)

        setResults({
            ...results,
            username: username_validity_result.isValid,
        });
        setErrorFor('username', username_validity_result.errorMessage);

        unlockOrLockSubmit();
    }


    // Clears any errors that are displayed on a field already
    const clearError = (input) => {
        setFormErrors({
            ...formErrors,
            [input]:''
        });
    }
    
    const setErrorFor = (input, message) => {
        setFormErrors({
            ...formErrors,
            [input]: message
        });
    }


    const validateFirstName = () => {
        clearError('firstName');
        const firstNameValue = credentials.firstName.trim();
        let firstNameValidityResult = IsNameValid(firstNameValue)

        setResults({
            ...results,
            firstName: firstNameValidityResult.isValid
        });

        setErrorFor('firstName', firstNameValidityResult.errorMessage);
        unlockOrLockSubmit();
    }

    
    const validateLastName = () => {
        clearError('lastName');
    
        const lastNameValue = credentials.lastName.trim();
        let lastNameValidityResult = IsNameValid(lastNameValue)
    
        setResults({
            ...results,
            lastName: lastNameValidityResult.isValid
        });
        setErrorFor('lastName', lastNameValidityResult.errorMessage);

        unlockOrLockSubmit();
    }

    
    const validateEmail = () => {
        clearError('email');
    
        const emailValue = credentials.email.trim();
        let emailValidityResult = IsEmailValid(emailValue)

        setResults({
            ...results,
            email: emailValidityResult.isValid
        });
        setErrorFor('email', emailValidityResult.errorMessage);
        unlockOrLockSubmit();
    }
    

    const validatePasswords = () => {
        clearError('passwords');
    
        const passwordValue = credentials.password.trim();
        const passwordConfirmationValue = credentials.passwordConfirmation.trim();

        let passwordsValidityResult = IsPasswordValid(passwordValue, passwordConfirmationValue)
        setResults({
            ...results,
            passwords: passwordsValidityResult.isValid
        });
        setErrorFor('passwords', passwordsValidityResult.errorMessage);
        unlockOrLockSubmit();
    }

    const unlockOrLockSubmit = () => {
         setDisabled(!Object.values(results).every((result) => result));
    }


  return (
    <form action="">

        <InputGroup  className="input-group mb-3"  icon="fas fa-user">
            <input type="text" name="username" placeholder="Username..." className="form-control" value={credentials.username} onChange={inputChanged} onBlur={validateUsername}/>
            <small className='usernameSmall'> {formErrors.username} </small>
        </InputGroup>

        <InputGroup  className="input-group mb-2"  icon="fas fa-id-badge">
            <input type="text" name="firstName" placeholder="First Name..." className="form-control" value={credentials.firstName} onChange={inputChanged}  onBlur={validateFirstName}/>
            <small className='firstNameSmall'> {formErrors.firstName} </small>
        </InputGroup>
       
        <InputGroup  className="input-group mb-2"  icon="fas fa-id-badge">
            <input type="text" name="lastName" placeholder="Last Name..." className="form-control" value={credentials.lastName} onChange={inputChanged}  onBlur={validateLastName}/>
            <small className='lastNameSmall'> {formErrors.lastName} </small>
        </InputGroup>

        <InputGroup  className="input-group mb-2"  icon="fas fa-envelope-square">
            <input type="text" name="email" placeholder="Email..." className="form-control" value={credentials.email} onChange={inputChanged}  onBlur={validateEmail}/>
            <small className='emailSmall'> {formErrors.email} </small>
        </InputGroup>

        <InputGroup  className="input-group mb-2"  icon="fas fa-calendar-alt">
            <input type="date" name="date_of_birth" placeholder="Date of Birth..." className="form-control" value={credentials.date_of_birth} onChange={inputChanged}  />
        </InputGroup>

        <InputGroup  className="input-group mb-2"  icon="fas fa-key">
            <input type="password" name="password" placeholder="Password..." className="form-control" value={credentials.password} onChange={inputChanged}  onBlur={validatePasswords}/>
        </InputGroup>
        
        <InputGroup  className="input-group mb-2"  icon="fas fa-key">
            <input type="password" name="passwordConfirmation" placeholder="Confirm Password..." className="form-control" value={credentials.confirmPassword} onChange={inputChanged}  onBlur={validatePasswords}/>
            <small className='passwordSmall'> {formErrors.passwords} </small>
        </InputGroup>
        
        <p className="error"> {props.error} </p>

        <div className="d-flex justify-content-center mt-3 login-container">
            <input role ='button' className="btn login-btn" type="submit" value="Register" onClick={register} disabled={disabled}/>
        </div>
    </form>
  )
}

export default RegisterForm
