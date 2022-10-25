import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blogRequest from '../services/BlogRequest'
import '../components/blogsStyle.css'
import moment from 'moment';
import { UserContext } from '../components/UserContext';


const BlogListPage = (props) => {

    const navigate = useNavigate();
    const [blogData, setBlogData] = useState('');
    const {user} = useContext(UserContext);
    
    const fetchTasksOrRedirect = () => {
        


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
        fetchTasksOrRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <div className='blogListPage'>
            <h1 className="heading"><span> Blogs </span></h1>

            <Link className="create_text" to='/blog/add' > Create New </Link>
            {

                
                Object.values(blogData).map(blog => (
                    
                    <div className="record">
                    <div className="labels">
                      <h3 className="created"> Created: {moment(blog.created).fromNow()} </h3>
                      <Link className="link" to={'/blog/:id'} state={{ id: blog.id }}>
                            <h1 className="title blogs-label"> { blog.title } </h1> 
                      </Link>
                      <h3 className="content blogs-label"> Content: { blog.content }</h3>
                      <h3 className="author blogs-label"> Author: { blog.user_username }</h3>
                    </div> 

                    { (blog.user_username === user) ?
                        
                        (<div className="methods">
                            <Link className="method" to='/blog/edit/:id'  state={{id: blog.id, data: blog}}> Update </Link>
                            <Link className="method" to='/blog/delete/:id'  state={{id: blog.id, username: blog.title}}> Delete </Link>
                        </div>) : <div></div>
                    }
                  </div>
                ))
            }
        </div>
    )
}
export default BlogListPage;
