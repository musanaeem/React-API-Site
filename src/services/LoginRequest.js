import Cookies from 'js-cookie';

async function LoginRequest(credentials) {

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



    let options = getOptions(credentials)

        const env = process.env;

        //const url = `${env.REACT_APP_HOST}:${env.REACT_APP_PORT}${env.REACT_APP_LOGIN_PATH}`

        return fetch('http://localhost:8000/api/login/', options)
        .then(response => response.json())
        .then(data => {
          return data;
        });
      }

export default LoginRequest