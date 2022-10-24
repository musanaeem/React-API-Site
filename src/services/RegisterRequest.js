import getOptions from "../utils/options";

const registerRequest = (credentials) => {
   

    let options = getOptions('POST', credentials)

        const env = process.env;

        const url = `${env.REACT_APP_HOST}${env.REACT_APP_REGISTER_PATH}`

        return fetch(url, options)
        .then(response => response.json())
        .then(data => {
          return data;
        });
      }

export default registerRequest