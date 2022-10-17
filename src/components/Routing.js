import React, { Component } from 'react'
import {
    useNavigate,
    Route,
    Routes,
  } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import {HomePageWrapper} from '../pages/HomePage';
import ProtectedLogin from './ProtectedLogin';
import ProtectedRoutes from './ProtectedRoutes';
import RegisterPage from '../pages/RegisterPage';


class Routing extends Component {

  constructor(props){
    super(props);

    this.state = {
      error: '',
      successMessage: ''
    };

  }

  getOptions = credentials => {

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': null
      },
      body: JSON.stringify(credentials),
    };

    return options
  }

  logUserIn = (credentials) => {

    let options = this.getOptions(credentials)

    fetch('http://localhost:8000/api/login/', options)
    .then(response => response.json())
    .then(data => {
      if(!data.detail){
        this.props.navigator('/home');
        window.localStorage.setItem('blogSiteUserLoggedIn',true);
      }
      else{
        this.setState({
          error: data.detail
        })
      }
    });
  }

  registerUser = (credentials) => {

    let options = this.getOptions(credentials);
    const errorMessage = 'This field is required.'

    fetch('http://localhost:8000/api/register/', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      //might change with object.values().every()
      if(data.username != errorMessage && data.password != errorMessage && data.email != errorMessage && data.date_of_birth != errorMessage){
        this.setState({
          successMessage: "Registration Successful"
        })
        this.props.navigator('/login');
      }
      else{
        this.setState({
          error: "Registration failed"
        })
      }

    });
  }

  componentDidMount() {
    if (!window.localStorage.getItem('blogSiteUserLoggedIn'))
    {
      window.localStorage.setItem('blogSiteUserLoggedIn', false);
    }
  }

  render() {
    return (
      <Routes>
          <Route element={<ProtectedLogin /> }>
            <Route path='/login' element={<LoginPage  onLogin = {this.logUserIn} error = {this.state.error} successMessage = {this.state.successMessage}/> }/>
            <Route path='/register' element={<RegisterPage onRegister = {this.registerUser} error = {this.state.error} />} />

          </Route>

          <Route element={<ProtectedRoutes /> }>
            <Route path='/home' element={<HomePageWrapper /> }/>
          </Route>
      </Routes>
    )
  }
}

export function RoutingWrapper(props){
  const navigator = useNavigate();
  return (<Routing navigator={navigator}></Routing>)
}

export default Routing;