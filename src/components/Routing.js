import React, { Component } from 'react'
import {
    Route,
    Routes,
  } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedAuthentication from './ProtectedAuthentication';
import ProtectedRoutes from './ProtectedRoutes';
import RegisterPage from '../pages/RegisterPage';
import Navbar from './Navbar';
import BioPage from '../pages/BioPage';
import BlogListPage from '../pages/BlogListPage';
import BlogPage from '../pages/BlogPage';
import UpdateOrCreate from '../pages/UpdateOrCreate';


class Routing extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false
    }

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
      <>
      {this.state.isLoggedIn && <Navbar  changeLoginState = {this.updateLoginState}/>}
      <Routes>
          <Route element={<ProtectedAuthentication isLoggedIn = {this.state.isLoggedIn}/> }>
            <Route path='/login' element={<LoginPage  changeLoginState = {this.updateLoginState}/> }/>
            <Route path='/register' element={<RegisterPage />} />

          </Route>

          <Route element={<ProtectedRoutes isLoggedIn = {this.state.isLoggedIn}/> }>
            <Route path='/home' element={<HomePage/> }/>
            <Route path='/bio' element={<BioPage changeLoginState = {this.updateLoginState}/> } />
            <Route exact path='/bio/edit' element={<UpdateOrCreate />} />
            <Route path='/blog' element={<BlogListPage changeLoginState = {this.updateLoginState}/> }/>
            <Route exact path='/blog/:id' element={<BlogPage changeLoginState = {this.updateLoginState}/> }/>

          </Route>
      </Routes>
      </>
    )
  }
}

export default Routing;