import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {RoutingWrapper} from './components/Routing';

export default class App extends Component {
  
  render() {
    return (
      <div className='Container'>
        <Router>
          <RoutingWrapper/>
        </Router>
      </div>
    )
  }

  


}
