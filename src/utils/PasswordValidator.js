const isPasswordValid = (passwordValue, passwordConfirmationValue) => {
    const passwordRegex = /(.*[0-9].*[!@#$%^&*()<>?/.,`~].*)|(.*[!@#$%^&*()<>?/.,`~].*[0-9].*)/;

    if(passwordValue !== passwordConfirmationValue){
        return {
            isValid: false,
            errorMessage: "Password fields do not match. Please try again."
        }
    }
    if(passwordValue.length < 6 || passwordValue.length > 15){
        return {
            isValid: false,
            errorMessage: "Password length should be between 6 and 15 characters."
        }
    }
    if(!passwordRegex.test(passwordValue)){
        return {
            isValid: false,
            errorMessage: "Invalid password. Password should contain numbers and symbols."
        }
    }

    return {
        isValid: true,
        errorMessage: ''
    }
}

export default isPasswordValid
