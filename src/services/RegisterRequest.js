import Cookies from 'js-cookie';


const getOptions = credentials => {

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': null,
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(credentials),
    };

    return options
  }


function registerRequest(credentials) {
   

    let options = getOptions(credentials)

        const env = process.env;

        const url = `${env.REACT_APP_HOST}:${env.REACT_APP_PORT}${env.REACT_APP_REGISTER_PATH}`

        return fetch(url, options)
        .then(response => response.json())
        .then(data => {
          return data;
        });
      }

export default registerRequest