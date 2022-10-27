import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bioRequest from '../services/BioRequest';
import '../components/bioStyle.css'
import RecordContainer from '../components/RecordContainer';
import CreateButton from '../components/CreateButton';

const BioPage = (props) => {
    const navigate = useNavigate();
    const [bioData, setBioData] = useState('');
    const [isData, setIsData] = useState(false);
    const method = 'GET';
    const body = '';
    const bioText = `'s Bio`;
    
    const fetchBioOrRedirect = () => {
        bioRequest(method, body).then(data => { 
            if(data.detail === "Not found."){
                setIsData(false);
            }
            else if(data.detail){
                props.changeLoginState(false);
                navigate('/login');
                return;
            }
            else
            {
                setIsData(true);
                setBioData(data);
            }
        });
    }

    useEffect(() => {
        fetchBioOrRedirect();
    },[])
    
    return (
        <div className='bioPage'>
            <h1 className="username"> <span className="user"> {isData && bioData.user_username + bioText} </span></h1>

            {isData ? (
                <div>
                    <p className="messages">  </p>

                    <RecordContainer  recordClassName='bio-record' type='Bio' data={bioData}>
                        <h1 className="name"> { bioData.name }</h1>
                        <h3> Address: { bioData.address }</h3>
                        <h3> Description: { bioData.description }</h3>
                    </RecordContainer>

                </div>
            ): (<div>
                    <CreateButton  path='add'/>
                    <h1 className='notFound'> Data Not Found</h1>
                </div>
        )}
        </div>
    )
}

export default BioPage
