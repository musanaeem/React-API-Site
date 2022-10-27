import ValidateUsernameOrName from "./ValidateUsernameOrName";

const IsUsernameValid = (usernameValue) => {
    const usernameRegex = /^[\w-]+$/;
    const message = "Invalid username entered. Please only use a combination of alphanumeric, _ and -";
    return ValidateUsernameOrName(usernameValue, usernameRegex, message);  
}

export default IsUsernameValid
