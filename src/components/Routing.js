import React, { Component } from 'react'
import {
    Route,
    Routes,
  } from 'react-router-dom';
import {LoginWrapper} from '../pages/LoginPage';
import {HomePageWrapper} from '../pages/HomePage';
import ProtectedAuthentication from './ProtectedAuthentication';
import ProtectedRoutes from './ProtectedRoutes';



class Routing extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.updateLoginState = this.updateLoginState.bind();
  }

  componentDidMount() {
    if (!window.localStorage.getItem('blogSiteUserLoggedIn'))
    {
      window.localStorage.setItem('blogSiteUserLoggedIn', false);
      this.setState({
        isLoggedIn: false
      })
    }
    else{
      this.setState({
        isLoggedIn: JSON.parse(window.localStorage.getItem('blogSiteUserLoggedIn'))
      })
    }
  }

   updateLoginState = value => {
    this.setState({
      isLoggedIn: value
    })
  }
  

  render() {
    return (
      <Routes>
          <Route element={<ProtectedAuthentication isLoggedIn = {this.state.isLoggedIn}/> }>
            <Route path='/login' element={<LoginWrapper  changeLoginState = {this.updateLoginState}/> }/>
          </Route>
            
          <Route element={<ProtectedRoutes isLoggedIn = {this.state.isLoggedIn}/> }>
            <Route path='/home' element={<HomePageWrapper changeLoginState = {this.updateLoginState}/> }/>
          </Route>
      </Routes>
    )
  }
}

export default Routing;