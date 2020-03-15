import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'  
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'  
import signup from './Signup'  
import About from './About'  
import Contact from './Contact'  
import Notfound from './NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Login from './Login';


const routing = (  
<Router>  
   <Fragment>  
        <nav class="navbar navbar-expand-md bg-info navbar-dark sticky-top">
        <a class="navbar-brand" href="#">Paras Online Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
            <li  class="nav-item active">
                <a class="nav-link"   href="/" exact activeStyle={{color:'red'}}>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>    
            <li class="nav-item">
                <a class="nav-link" href="/signup">Sign up</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>    
            </ul>
        </div>  
        </nav>
        <br/> 
        <Switch>  
         <Route exact path="/" component={App} />  
         <Route path="/signup" component={signup} />  
         <Route path="/login" component={Login} />  
         <Route path="/about" component={About} />  
         <Route path="/contact" component={Contact} />  
         <Route component={Notfound} />  
      </Switch> 
        </Fragment>
  </Router>  
  )  
  ReactDOM.render(routing, document.getElementById('root')); 
// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
