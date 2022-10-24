import getOptions from "../utils/options";

const bioRequest = (method, body) => {

    let options = getOptions(method, body)

    const env = process.env;

    const url = `${env.REACT_APP_HOST}${env.REACT_APP_BIO_PATH}`

    return fetch(url, options)
    .then(response => response.json())
    .then(data => {
        return data;
    });
}

export default bioRequest
