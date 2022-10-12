import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {RoutingWrapper} from './components/Routing';
import { Helmet } from 'react-helmet';

export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
    };
    //this.fetchTasks = this.fetchTasks.bind(this);
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

  // componentWillMount(){
  //   //this.fetchTasks();
  // }
  

  // fetchTasks(){
   
  //   fetch('http://localhost:8000/api/blog/', {headers: {
  //     'Authorization': Cookies.get("musa.naeem%40arbisoft.com")
  //   }})
  //   .then(response => response.json())
  //   .then(data => 
  //     console.log('Data: ', data));
  // }
  
  


}
