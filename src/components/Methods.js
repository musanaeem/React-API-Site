import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';
import '../components/methodStyle.css'



const Methods = (props) => {

    const {user} = useContext(UserContext);

    const getBioMethods = () => {
        console.log("here");
        return(
            <div className="methods">
                <Link className="method" to='/bio/edit' state={{data: props.data}}> Update </Link>
                <Link className="method" to='/bio/delete'  state={{username: props.data.user_username}}> Delete </Link>
            </div>
        )
    }

    const getBlogMethods = () => {

        if (props.data.user_username === user){
            return(
                <div className="methods">
                    <Link className="method" to='/blog/edit/:id'  state={{id: props.id, data: props.data}}> Update </Link>
                    <Link className="method" to='/blog/delete/:id'  state={{id: props.id, username: props.data.title}}> Delete </Link>
                </div>
            )
        }

        return (
            <div></div>
        )
        
    }


  return (
    <>
    {
        props.type === 'Bio' ? getBioMethods(): getBlogMethods()
    }
    </>
  )
}

export default Methods
