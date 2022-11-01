import validateUsernameOrName from './ValidateUsernameOrName';

const isNameValid = (name_value) => {
    const nameRegex = /^[a-z]+$/i;
    const message = "Invalid name entered. Please only use alphabets";

    return validateUsernameOrName(name_value, nameRegex, message);
}

export default isNameValid
