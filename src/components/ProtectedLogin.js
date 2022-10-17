import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default class ProtectedAuthentication extends Component {
  render() {
    return (window.localStorage.getItem('blogSiteUserLoggedIn') == 'true') ? <Navigate to='/home'/> : <Outlet/>;
  }
}
