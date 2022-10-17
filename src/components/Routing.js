import Cookies from 'js-cookie';
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



class Routing extends Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }


  getOptions = credentials => {

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': null,
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(credentials),
    };

    return options
  }
  


  logUserIn = credentials => {
    
    let options = this.getOptions(credentials)


    fetch('http://localhost:8000/api/login/', options)
    .then(response => response.json())
    .then(data => {
      if(!data.detail){
        Cookies.set('jwt', JSON.stringify(data));
        this.props.navigator('/home');
      }
      else{
        this.setState({
          error: data.detail
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
            <Route path='/login' element={<LoginPage  onLogin = {this.logUserIn} error = {this.state.error}/> }/>
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