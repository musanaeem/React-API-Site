import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogRequest from '../services/BlogRequest'
import '../components/blogsStyle.css'
import moment from 'moment';


function BlogListPage(props) {

    const navigate = useNavigate();
    const [blogData, setBlogData] = useState('');
    
    
    const fetchTasksOrRedirect = () => {
        


        blogRequest().then(data => { 
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
    },[])


    return(
        <div className='blogListPage'>
            <h1 className="heading"><span> Blogs </span></h1>

            <a className="create_text" href="{% url 'create-blog' %}" > Create New </a>
            {

                
                Object.values(blogData).map(blog => (
                    <div className="record">
                    <div className="labels">
                      <h3 className="created"> Created: {moment(blog.created).fromNow()} </h3>
                      <Link className="link" to={'/blog/:id'} state={{ id: blog.user }}>
                            <h1 className="title blogs-label"> { blog.title } </h1> 
                      </Link>
                      <h3 className="content blogs-label"> Content: { blog.content }</h3>
                      <h3 className="author blogs-label"> Author: { blog.user_username }</h3>
                    </div> 
            
                    {/* { if (blog.user.username == username)}
                        <div className="methods">
                            <a className="method" href="{% url 'update-blog' blog.id %}" > Update </a>
                            <a className="method" href="{% url 'delete-blog' blog.id %}" > Delete </a>
                        </div>
                    {% endif %} */}
            
                  </div>
                ))
            }
        </div>
    )
}
export default BlogListPage;
