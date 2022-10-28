import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/navbarStyles.css'
import logoutRequest from '../services/LogoutRequest';

function Navbar(props) {

    const navigate = useNavigate();

    const logoutUser = () => {
        logoutRequest().then( () =>{
            window.localStorage.setItem('blogSiteUserLoggedIn', false);
            props.changeLoginState(false);
            navigate('/login');
        });
        
      }

  return (
    <nav >

        <div className='nav'>
            <Link to='/home' className='site-title'> Arbisoft Blogs </Link>
            <ul>
                {props.loginState ? (
                    <>
                        <li>
                            <Link to='/bio'> Bio </Link>
                        </li>
                        <li>
                            <Link to='/blog'> Blogs </Link>
                        </li>
                        <li className='logout-li' onClick={logoutUser}>
                            Logout 
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to='/login' className='signIn-btn'> Sign In </Link>
                    </li>
                )
            }
            </ul>
        </div>

        
        
    </nav>
  )
}

export default Navbar
