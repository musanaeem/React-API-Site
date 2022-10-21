import Cookies from "js-cookie";


const getOptions = (method, body = '') => {

    const options = {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': null,
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    };

    if (method !== 'GET'){
        options = {
            ...options,
            body:body
        }
    }
  
      return options
    }
  

function bioRequest(method, body) {

    let options = getOptions(method, body)

        const env = process.env;

        const url = `${env.REACT_APP_HOST}:${env.REACT_APP_PORT}${env.REACT_APP_BIO_PATH}`

        return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            return data;
        });
      }

export default bioRequest
