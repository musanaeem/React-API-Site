import Cookies from 'js-cookie'
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

class HomePage extends Component {
  
  logoutUser = () => {
    window.localStorage.setItem('blogSiteUserLoggedIn', false);
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
  return (<HomePage navigator={navigator}></HomePage>)
}

export default HomePage;