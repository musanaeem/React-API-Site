import Cookies from 'js-cookie';

function options() {

    const getOptions = credentials => {

        const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': null,
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
        };

        return options
    }
}

export default options
