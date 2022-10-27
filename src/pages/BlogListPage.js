import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogRequest from '../services/BlogRequest'
import '../components/blogsStyle.css'
import moment from 'moment';
import RecordContainer from '../components/RecordContainer';
import CreateButton from '../components/CreateButton';


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <div className='blogListPage'>
            <h1 className="heading"><span> Blogs </span></h1>

            <CreateButton  path='add'/>
            {
                Object.values(blogData).map(blog => (
                    <RecordContainer key={blog.id} type='Blog' id={blog.id} data={blog} recordClassName='blog-record'>
                        <h3 className="created"> Created: {moment(blog.created).fromNow()} </h3>
                        <Link className="link" to={'/blog/:id'} state={{ id: blog.id }}>
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
