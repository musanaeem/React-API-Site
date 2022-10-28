import getOptions from "../utils/options";


const LogoutRequest = () => {

    let options = getOptions('POST');

    const env = process.env;

    const url = `${env.REACT_APP_HOST}${env.REACT_APP_LOGOUT_PATH}`

    return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      return data;
    });
  }


export default LogoutRequest