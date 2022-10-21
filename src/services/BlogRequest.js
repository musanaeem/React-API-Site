import '../utils/options'

const blogRequest = (id='') => {

    let options = getOptions()

        const env = process.env;

        const url = `${env.REACT_APP_HOST}${env.REACT_APP_BLOG_PATH}${id}`

        return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            return data;
        });
      }

export default blogRequest