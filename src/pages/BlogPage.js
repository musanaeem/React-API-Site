import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import blogRequest from '../services/BlogRequest'
import '../components/blogStyle.css'

const BlogPage = (props) => {

    const navigate = useNavigate();
    const [blogData, setBlogData] = useState('');
    const { state } = useLocation();

    
    const fetchTasksOrRedirect = () => {

        blogRequest('GET', state.id).then(data => { 
            if(data.detail){
                props.changeLoginState(false);
                navigate('/login');
                return;
            }
            else
            {
                setBlogData(data);
            }
        });
    }

    useEffect(() => {
        fetchTasksOrRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

  return (
    <div className='blogPage'>
        <h1 className="heading"><span> Blog </span></h1>

        <div className="labels">
            <h1 className="title"> { blogData.title } </h1>
            <h4 className="author"> { blogData.user_username } | { blogData.created }</h4>
            <hr/>
            <h3 className="content"> { blogData.content }</h3>
        </div> 
      
    </div>
  )
}

export default BlogPage
