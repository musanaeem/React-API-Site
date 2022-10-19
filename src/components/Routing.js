import React, { Component } from 'react'
import {
    Route,
    Routes,
  } from 'react-router-dom';
import {LoginWrapper} from '../pages/LoginPage';
import {HomePageWrapper} from '../pages/HomePage';
import ProtectedAuthentication from './ProtectedAuthentication';
import ProtectedRoutes from './ProtectedRoutes';
import RegisterPage from '../pages/RegisterPage';


class Routing extends Component {

  constructor(props){
    super(props);

    this.state = {
<<<<<<< HEAD
      isLoggedIn: false,
      error: '',
      successMessage: ''
    };
=======
      isLoggedIn: false
    }
>>>>>>> main

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

<<<<<<< HEAD

  // getOptions = credentials => {

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': null,
  //       'X-CSRFToken': Cookies.get('csrftoken')
  //     },
  //     body: JSON.stringify(credentials),
  //   };

  //   return options
  // }


  // registerUser = (credentials) => {

  //   let options = this.getOptions(credentials);
  //   const errorMessage = 'This field is required.'

  //   fetch('http://localhost:8000/api/register/', options)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     //might change with object.values().every()
  //     if(data.username != errorMessage && data.password != errorMessage && data.email != errorMessage && data.date_of_birth != errorMessage){
  //       this.setState({
  //         successMessage: "Registration Successful"
  //       })
  //       this.props.navigator('/login');
  //     }
  //     else{
  //       this.setState({
  //         error: "Registration failed"
  //       })
  //     }

  //   });
  // }


  updateLoginState = value => {
    this.setState({
      isLoggedIn: value
    })
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
=======
   updateLoginState = value => {
    this.setState({
      isLoggedIn: value
    })
>>>>>>> main
  }
  

  render() {
    return (
      <Routes>
<<<<<<< HEAD
          <Route element={<ProtectedAuthentication isLoggedIn = {this.state.isLoggedIn}/>}>
            <Route path='/login' element={<LoginPage changeLoginState = {this.updateLoginState}/> }/>
            <Route path='/register' element={<RegisterPage onRegister = {this.registerUser} error = {this.state.error} />} />

=======
          <Route element={<ProtectedAuthentication isLoggedIn = {this.state.isLoggedIn}/> }>
            <Route path='/login' element={<LoginWrapper  changeLoginState = {this.updateLoginState}/> }/>
>>>>>>> main
          </Route>

          <Route element={<ProtectedRoutes isLoggedIn = {this.state.isLoggedIn}/> }>
            <Route path='/home' element={<HomePageWrapper changeLoginState = {this.updateLoginState}/> }/>
          </Route>
      </Routes>
    )
  }
}

export default Routing;