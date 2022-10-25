import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bioRequest from '../services/BioRequest';
import '../components/bioStyle.css'

const BioPage = (props) => {
    const navigate = useNavigate();
    const [bioData, setBioData] = useState('');
    const [isData, setIsData] = useState(false);
    const method = 'GET';
    const body = '';
    const bioText = `'s Bio`;
    
    const fetchTasksOrRedirect = () => {


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
        fetchTasksOrRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className='bioPage'>
            <h1 className="username"> <span className="user"> {isData && bioData.user_username + bioText} </span></h1>

            {isData ? (
                <div>
                    <p className="messages">  </p>

                    <div className="record">
                        <div className="labels">
                        <h1 className="name"> { bioData.name }</h1>
                        <h3> Address: { bioData.address }</h3>
                        <h3> Description: { bioData.description }</h3>
                        </div> 

                        <div className="methods">
                        <Link className="method" to='/bio/edit' state={{data: bioData}}> Update </Link>
                        <Link className="method" to='/bio/delete'  state={{username: bioData.user_username}}> Delete </Link>
                        </div>

                    </div> 
                </div>
    ): (<div>
        <Link className="create_text" to='/bio/add'> Create New </Link>
        <h1 className='notFound'> Data Not Found</h1>
        </div>
        )}

        </div>
    )
}

export default BioPage
