import Cookies from 'js-cookie';

const getOptions = () => {

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': null,
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      credentials: 'include',
      body: "",
    };

    return options
  }

function LogoutRequest() {

    let options = getOptions()

        const env = process.env;

        const url = `${env.REACT_APP_HOST}:${env.REACT_APP_PORT}${env.REACT_APP_LOGOUT_PATH}`

        return fetch(url, options)
        .then(response => response.json())
        .then(data => {
          return data;
        });
      }

export default LogoutRequest