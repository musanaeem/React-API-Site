import Cookies from 'js-cookie';
import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default class ProtectedLogin extends Component {
  render() {
    return Cookies.get('jwt') ? <Navigate to='/home'/> : <Outlet/>;
  }

}
