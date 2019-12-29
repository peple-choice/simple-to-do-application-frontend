/*
 * Arnab Mallick
 * Version 1.0 
 * Author : Arnab Mallick(arnab.mallick@gmail.com)
*/
import React, {Component} from 'react';
import './App.css';
import Navbar from '../components/layouts/Navbar';
import Login from '../components/Login/Login';
import ProjectForm from '../components/layouts/ProjectForm';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Home from '../components/layouts/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event){
    event.preventDefault();
    console.log("Logout trigered");
    window.sessionStorage.clear();
    window.location.href = '/';
  }

  render () {
    return (    
      <div className="container">
        <Header/>
        <Router>     
          <Navbar logout={this.handleLogout}/>
          <br/>
          <div className="row">
          <div className="col-sm-2">&nbsp;</div>
          <div className="col-sm-8">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" >
                <Login title="This is login form"/>
              </Route>
              <Route exact path="/createproject" component={ProjectForm}/>
            </Switch> 
          </div>
          <div className="col-sm-2">&nbsp;</div>
          </div>
        </Router>
        <br/>
        <Footer/>
      </div>
    )
  }

}

export default App;
