
const isEmailValid = (emailValue) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
        if(!emailRegex.test(emailValue)){
            return {
                isValid: false,
                errorMessage: 'Invalid Email. The email format entered is not valid.'
            };
        }

        return {
            isValid: true,
            errorMessage: ''
        };
}

export default isEmailValid
