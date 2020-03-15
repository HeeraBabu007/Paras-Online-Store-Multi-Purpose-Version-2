import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { Component, Fragment } from 'react';  
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';  

class Footer extends Component {  
    render() {                
    return (  
     <Fragment> 
<div class="jumbotron text-center bg-info" >
  <p>Paras Online Store © Copyright 2011-2020. All rights reserved. </p>
  <p>Developed by http://www.programmingshifts.com.</p>
</div>
</Fragment> 
      );   
    }   
  }  
  export default Footer; 