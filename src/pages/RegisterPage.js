import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import RegisterForm from '../components/RegisterForm';
import registerRequest from '../services/RegisterRequest';


function RegisterPage (props) {

    const [error, setError] = useState('');
    const navigate = useNavigate();


    const registerUser = (credentials) => {
    
        const errorMessage = 'This field is required.'

        registerRequest(credentials).then( data => {
            
            let detail = Object.values(data).find( dataValue => {
                return dataValue == errorMessage;
              });

            if(detail){
                setError('Registration failed');
            }
            else if(Array.isArray(data.username)){
                setError('User Already Exists');
            }
            else{
                navigate('/login', {state:true});
            }
        });
    }
    


    return (
        <div>
            <FormContainer title='Register' alternateTitle='Login'  accountMessage='Already have an account?' link='/login'>
                <RegisterForm onRegister = {registerUser} error = {error}/>
            </FormContainer>
        </div>
    )
}

export default RegisterPage
