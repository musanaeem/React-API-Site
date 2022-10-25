import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import bioRequest from '../services/BioRequest'
import '../components/deleteStyle.css'
import blogRequest from '../services/BlogRequest';

const DeleteRecord = (props) => {

    const {state} = useLocation();
    const navigate = useNavigate();


    const deleteBio = () => {
        bioRequest('DELETE').then( () => {
            navigate('/bio');
        })
    }

    const deleteBlog = () => {
        blogRequest('DELETE', state.id).then( () => {
            navigate('/blog');
        })

    }

    const deleteRecord = event => {
        event.preventDefault();

        if(props.type === 'Bio'){
            deleteBio();
        }
        else{
            deleteBlog();
        }
    }

//Make one component with conditional props
  return (
    <div className='deletePage'>
        <p> Are you sure you want to delete <span>"{state.username}"</span>? </p>

        <form>

            {props.type === 'Bio' ? 
                <Link to='/bio'> Cancel </Link> :
                <Link to='/blog'> Cancel </Link>
            }

            <input className="submit" type="submit" name="Confirm" value="Confirm" onClick={deleteRecord}/>

        </form>
    </div>
  )
}

export default DeleteRecord
