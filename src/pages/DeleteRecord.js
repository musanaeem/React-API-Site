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
            <p className='delete-message'> Are you sure you want to delete <span className='delete-username'>&quot{state.username}&quot</span>? </p>

            <form className='delete-form'>

                {props.type === 'Bio' ? 
                    <Link to='/bio'> Cancel </Link> :
                    <Link to='/blog'> Cancel </Link>
                }

                <input className="submit delete-request" type="submit" name="Confirm" value="Confirm" onClick={deleteRecord}/>

            </form>
        </div>
    )
}

export default DeleteRecord
