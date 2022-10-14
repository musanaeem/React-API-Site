import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer';
import RegisterForm from '../components/RegisterForm';


// destructure props like ({name, age, ...props})
const RegisterPage = (props) => {
    
    const [credentials, setCredentials] = useState("") 
    
    const navigator = useNavigate();
  
    //const goHome = () => navigator('/home');

    const registerTag = () => {
        return(
            <RegisterForm onRegister = {props.onRegister} error = {props.error}/>
        )
    }

    return (
        <div>
            <FormContainer form={registerTag} title='Register' alternateTitle='Login'  accountMessage='Already have an account?'/>
        </div>
    )
}

export default RegisterPage
