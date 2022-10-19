import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default class ProtectedAuthentication extends Component {
  render() {
    return (this.props.isLoggedIn == true) ? <Navigate to='/home'/> : <Outlet/>;
  }
<<<<<<< HEAD

=======
>>>>>>> main
}
