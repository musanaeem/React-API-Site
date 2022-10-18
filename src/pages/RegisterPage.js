import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import RegisterForm from '../components/RegisterForm';
import RegisterRequest from '../services/RegisterRequest';


const RegisterPage = (props) => {

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerTag = () => {
        return(
            <RegisterForm onRegister = {registerUser} error = {error}/>
        )
    }

    const registerUser = (credentials) => {
    
        const errorMessage = 'This field is required.'

        RegisterRequest(credentials).then( data => {
            //might change with object.values().every()
            if(data.username != errorMessage && data.password != errorMessage && data.email != errorMessage && data.date_of_birth != errorMessage && !Array.isArray(data.username)){
                navigate('/login', {state:true});
            }
            else{
                setError('Registration failed');
            }
        });
    
    }


    return (
        <div>
            <FormContainer form={registerTag} title='Register' alternateTitle='Login'  accountMessage='Already have an account?' link='/login'/>
        </div>
    )
}

export default RegisterPage
