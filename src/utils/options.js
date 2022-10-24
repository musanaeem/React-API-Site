import Cookies from 'js-cookie';

const getOptions = (method, body='') => {

    let options = {
    method: method,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': null,
        'X-CSRFToken': Cookies.get('csrftoken')
    },
    credentials: 'include',
    body: JSON.stringify(body),
    };

    return options
}


export default getOptions
