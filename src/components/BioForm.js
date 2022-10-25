import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import bioRequest from '../services/BioRequest';

const BioForm = (props) => {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [credentials, setCredentials] = useState({
        name: '',
        address: '',
        description: ''
    })
    
    useEffect(() => {
        if(props.method === 'PATCH'){
            const {data} = state;

        setCredentials({
            name: data.name,
            address: data.address,
            description: data.description
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitForm = event => {
        event.preventDefault();

        bioRequest(props.method, credentials).then( () => {
            navigate('/bio');
        })
    }

    const inputChanged = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

  return (
    <div className="form-container">
        <h1> Enter details for the record </h1>

        <form action="">
            <div className="form-inputs">
        
                <li>
                    <label> Name:</label>
                    <input type="text" name="name" value={credentials.name} onChange={inputChanged}/>
                </li>

                <li>
                    <label> Address:</label>
                    <input type="text" name="address"  value={credentials.address} onChange={inputChanged}/>
                </li>

                <li>
                    <label> Description:</label>
                    <textarea name="description" cols="40" rows="10" value={credentials.description} onChange={inputChanged}/>
                </li>

            </div>
            

            <input className="submit" type="submit" name="Submit" onClick={submitForm}/>
        </form>
    </div>
  )
}

export default BioForm
