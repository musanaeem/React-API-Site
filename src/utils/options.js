import Cookies from "js-cookie";

const options = () => {
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
}

export default options
