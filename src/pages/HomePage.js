import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import logoutRequest from '../services/LogoutRequest';

class HomePage extends Component {

  constructor(props){
  super(props);
}
  
  logoutUser = () => {
    window.localStorage.setItem('blogSiteUserLoggedIn', false);
<<<<<<< HEAD
    logoutRequest();
=======
>>>>>>> main
    this.props.changeLoginState(false);
    this.props.navigator('/login');
  }
  
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.logoutUser}> Logout </button>
      </div>
    )
  }
}

export function HomePageWrapper(props){
  const navigator = useNavigate();
<<<<<<< HEAD
  return (<HomePage navigator={navigator} changeLoginState={props.changeLoginState}></HomePage>)
=======
  return (<HomePage navigator={navigator}  changeLoginState={props.changeLoginState}></HomePage>)
>>>>>>> main
}

export default HomePage;