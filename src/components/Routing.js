import React, { Component } from 'react'
import {
    Route,
    Routes,
  } from 'react-router-dom';
import {LoginWrapper} from '../pages/LoginPage';
import {HomePageWrapper} from '../pages/HomePage';
import ProtectedAuthentication from './ProtectedLogin';
import ProtectedRoutes from './ProtectedRoutes';



class Routing extends Component {

  componentDidMount() {
    if (!window.localStorage.getItem('blogSiteUserLoggedIn'))
    {
      window.localStorage.setItem('blogSiteUserLoggedIn', false);
    }
  }

  render() {
    return (
      <Routes>
          <Route element={<ProtectedAuthentication /> }>
            <Route path='/login' element={<LoginWrapper /> }/>
          </Route>
            
          <Route element={<ProtectedRoutes /> }>
            <Route path='/home' element={<HomePageWrapper /> }/>
          </Route>
      </Routes>
    )
  }
}

export default Routing;