import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogRequest from '../services/BlogRequest'
import '../components/blogsStyle.css'
import moment from 'moment';
import CreateButton from '../components/CreateButton';
import RecordContainer from '../components/RecordContainer';


const BlogListPage = (props) => {

    const navigate = useNavigate();
    const [blogData, setBlogData] = useState('');
    
    
    const fetchBlogsOrRedirect = () => {
        blogRequest('GET').then(data => { 
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
        fetchBlogsOrRedirect();
    },[])


    return(
        <div className='blogListPage'>
            <h1 className="heading"><span> Blogs </span></h1>

            <CreateButton  path='blog/add'/>
            {
                Object.values(blogData).map(blog => (
                    
                    <RecordContainer  className='blog-record' key={blog.id}>
                        <h3 className="created"> Created: {moment(blog.created).fromNow()} </h3>
                        <Link className="link" to={'/blog/:id'} state={{ id: blog.user }}>
                            <h1 className="title blogs-label"> { blog.title } </h1> 
                        </Link>
                        <h3 className="blogs-label"> Content: { blog.content }</h3>
                        <h3 className="author blogs-label"> Author: { blog.user_username }</h3>
                    </RecordContainer>
                ))
            }
        </div>
    )
}
export default BlogListPage;
