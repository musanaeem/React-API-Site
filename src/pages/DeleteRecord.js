import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import bioRequest from '../services/BioRequest'
import '../components/deleteStyle.css'

function DeleteRecord() {

    const {state} = useLocation();
    const navigate = useNavigate();


    const deleteBio = () => {
        bioRequest('DELETE').then( () => {
            navigate('/bio');
        })
    }

    const deleteRecord = event => {
        event.preventDefault();

        deleteBio();
    }

  return (
    <div className='deletePage'>
        <p> Are you sure you want to delete <span>"{state.username}"</span>? </p>

        <form>

            <Link to='/bio'> Cancel </Link>

            <input className="submit" type="submit" name="Confirm" value="Confirm" onClick={deleteRecord}/>

        </form>
    </div>
  )
}

export default DeleteRecord
