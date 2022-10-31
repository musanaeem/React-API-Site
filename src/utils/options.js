import Cookies from "js-cookie";

const getOptions = (method, body = '') => {

    let options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    };

    if (method !== 'GET'){
        options = {
            ...options,
            body: JSON.stringify(body)
        }
    }

    return options
}

export default getOptions;

