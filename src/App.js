import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routing from './components/Routing';

export default class App extends Component {
  
  render() {
    return (
      <div className='Container'>
        <Router>
          <Routing/>
        </Router>
      </div>
    )
  }

  


}
