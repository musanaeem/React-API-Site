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
                title: data.title,
                content: data.content
            })
            setId(data.id+'/');
    }
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
        <div className='form-outline'>
            <h1 className='info-form-heading'> Enter details for the record </h1>

            <form action="" className='blog-form'>
                <div className="form-list">
            
                    <li>
                        <label className='form-title'> Title:</label>
                        <input type="text" name="title" value={credentials.title} onChange={inputChanged}/>
                    </li>

                    <li>
                        <label> Content:</label>
                        <textarea name="content" cols="40" rows="10" value={credentials.content} onChange={inputChanged}/>
                    </li>

                </div>

                <input className="submit-request" type="submit" name="Submit" onClick={submitForm}/>
            </form>
        </div>
    )

}

export default BlogForm
