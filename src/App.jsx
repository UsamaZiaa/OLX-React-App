import React, {Component} from 'react';
import AppRouter from './config/router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './components/home' 
import Header from './components/header'
import login from './components/login'

class App extends Component{
  render(){
    return(
      <AppRouter>
          
      </AppRouter>        
    )
  }
}

export default App;
