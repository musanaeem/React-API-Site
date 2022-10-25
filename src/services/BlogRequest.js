import getOptions from "../utils/options";

const blogRequest = (method, id='', body='') => {

    let options = getOptions(method, body);

        const env = process.env;

        const url = `${env.REACT_APP_HOST}${env.REACT_APP_BLOG_PATH}${id}`;

        console.log("url: ", url);
        console.log("options: ", options);

        return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            return data;
        });
      }

export default blogRequest