import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {RoutingWrapper} from './components/Routing';

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
    };
    
  }

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
