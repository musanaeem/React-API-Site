import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';
import '../components/methodStyle.css'


const BioMethods = (props) => (
    <div className="methods">
        <Link className="method" to='/bio/edit' state={{data: props.data}}> Update </Link>
        <Link className="method" to='/bio/delete'  state={{username: props.data.user_username}}> Delete </Link>
    </div>
);

const BlogMethods = (props) => {
    const {user} = useContext(UserContext);
   
   if (props.data.user_username === user){
        return (
            <div className="methods">
                <Link className="method" to='/blog/edit/:id'  state={{id: props.id, data: props.data}}> Update </Link>
                <Link className="method" to='/blog/delete/:id'  state={{id: props.id, username: props.data.title}}> Delete </Link>
            </div>
        )
    }
    return null;
}

const Methods = (props) => {
    return props.type === 'Bio' ? <BioMethods {...props} /> : <BlogMethods {...props}/>;
}

export default Methods
