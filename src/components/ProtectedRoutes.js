import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default class ProtectedRoutes extends Component {

  render() {
    return (window.localStorage.getItem('blogSiteUserLoggedIn') == 'true') ? <Outlet/> : <Navigate to='/login'/>;
  }

}
