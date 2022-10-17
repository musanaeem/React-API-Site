import React from 'react'
import FormContainer from '../components/FormContainer';
import RegisterForm from '../components/RegisterForm';


const RegisterPage = (props) => {

    const registerTag = () => {
        return(
            <RegisterForm onRegister = {props.onRegister} error = {props.error}/>
        )
    }

    return (
        <div>
            <FormContainer form={registerTag} title='Register' alternateTitle='Login'  accountMessage='Already have an account?' link='/login'/>
        </div>
    )
}

export default RegisterPage
