import ValidateUsernameOrName from './ValidateUsernameOrName';

const IsNameValid = (name_value) => {
    const nameRegex = /^[a-z]+$/i;
    const message = "Invalid name entered. Please only use alphabets";
    
    return ValidateUsernameOrName(name_value, nameRegex, message);
}

export default IsNameValid
