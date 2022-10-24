import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bioRequest from '../services/BioRequest';
import '../components/bioStyle.css'

const BioPage = (props) => {
    const navigate = useNavigate();
    const [bioData, setBioData] = useState('');
    const method = 'GET';
    const body = '';
    
    const fetchTasksOrRedirect = () => {
        


        bioRequest(method, body).then(data => { 
            if(data.detail){
                props.changeLoginState(false);
                navigate('/login');
                return;
            }
            else
            {
                setBioData(data);
            }
        });
    }

    useEffect(() => {
        fetchTasksOrRedirect();
    },[])
    
    return (
        <div className='bioPage'>
            <h1 className="username"> <span className="user">{bioData.user_username}'s Bio </span></h1>

            <Link className="create_text" to='./UpdateOrCreate' > Create New </Link>

            <p className="messages">  </p>

            <div className="record">
                <div className="labels">
                <h1 className="name"> { bioData.name }</h1>
                <h3> Address: { bioData.address }</h3>
                <h3> Description: { bioData.description }</h3>
                </div> 
                {/* <div className="methods">
                <a className="method" href="" > Update </a>
                <a className="method" href="" > Delete </a>
                </div> */}
            </div>
        </div>
    )
}

export default BioPage
