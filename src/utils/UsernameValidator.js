import validateUsernameOrName from "./ValidateUsernameOrName";

const isUsernameValid = (usernameValue) => {
    const usernameRegex = /^[\w-]+$/;
    const message = "Invalid username entered. Please only use a combination of alphanumeric, _ and -";
    return validateUsernameOrName(usernameValue, usernameRegex, message);  
}

export default isUsernameValid
