import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import blogRequest from '../services/BlogRequest';

const BlogForm = (props) => {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [credentials, setCredentials] = useState({
        title: '',
        content: ''
    })
    const [id, setId] = useState('');
    
    useEffect(() => {
        if(props.method === 'PUT'){
            const {data} = state;
            setCredentials({
                user: data.user,
                title: data.title,
                content: data.content
            })
            setId(data.id+'/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitForm = event => {
        event.preventDefault();

        blogRequest(props.method,id, credentials).then( () => {
            navigate('/blog');
        })
    }

    const inputChanged = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }


  return (
    <div className="form-container">
        <h1> Enter details for the record </h1>

        <form action="">
            <div className="form-inputs">
        
                <li>
                    <label> Title:</label>
                    <input type="text" name="title" value={credentials.title} onChange={inputChanged}/>
                </li>

                <li>
                    <label> Content:</label>
                    <textarea name="content" cols="40" rows="10" value={credentials.content} onChange={inputChanged}/>
                </li>

            </div>

            <input className="submit" type="submit" name="Submit" onClick={submitForm}/>
        </form>
    </div>
  )
}

export default BlogForm
