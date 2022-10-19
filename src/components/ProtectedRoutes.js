import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default class ProtectedRoutes extends Component {

  render() {
    return (this.props.isLoggedIn == true) ? <Outlet/> : <Navigate to='/login'/>;
  }
}
