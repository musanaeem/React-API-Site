import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/navbarStyles.css'
import logoutRequest from '../services/LogoutRequest';

function Navbar(props) {

    const navigate = useNavigate();

    const logoutUser = () => {
        window.localStorage.setItem('blogSiteUserLoggedIn', false);
        window.localStorage.setItem('username', null)
        logoutRequest().then(() => {
            props.changeLoginState(false);
            navigate('/login');
        });
        
      }

  return (
    <nav className='nav'>
        <Link to='/home' className='site-title'> Arbisoft Blogs </Link>
        <ul>
            <li>
                <Link to='/bio'> Bio </Link>
            </li>
            <li>
                <Link to='/blog'> Blogs </Link>
            </li>
            <li className='logout-li' onClick={logoutUser}>
                 Logout 
            </li>
        </ul>
        
    </nav>
  )
}

export default Navbar
