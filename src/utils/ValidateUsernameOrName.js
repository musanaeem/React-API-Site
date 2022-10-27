const ValidateUsernameOrName = (value, regex, message) => {
        
    if (value.length < 3 || value.length > 15){
        return {
            isValid: false,
            errorMessage: "The length should be 3-15 characters. please try again."
        };
    }

    if(!regex.test(value)){
        return {
            isValid: false,
            errorMessage: message
        };
    }

    return {
        isValid: true,
        errorMessage: ''
    }
}

export default ValidateUsernameOrName
