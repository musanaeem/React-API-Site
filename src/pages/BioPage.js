import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bioRequest from '../services/BioRequest';
import '../components/bioStyle.css'
import CreateButton from '../components/CreateButton';
import RecordContainer from '../components/RecordContainer';

const BioPage = (props) => {
    const navigate = useNavigate();
    const [bioData, setBioData] = useState('');
    const method = 'GET';
    const body = '';


    const fetchBioOrRedirect = () => {
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
        fetchBioOrRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className='bioPage'>
            <h1 className="username"> <span className="user">{bioData.user_username}'s Bio </span></h1>

            <CreateButton  path='bio/add'/>

            <p className="messages">  </p>

            <RecordContainer  className='bio-record'>
                <h1 className="name"> { bioData.name }</h1>
                <h3> Address: { bioData.address }</h3>
                <h3> Description: { bioData.description }</h3>
            </RecordContainer>
        </div>
            
    )
}

export default BioPage
