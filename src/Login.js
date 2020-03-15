import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { Component, Fragment } from 'react';  
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Footer from './Footer';

class Login extends Component {  

render() {                
return (  
    <Fragment>  
        <Container>
        <h1>Login Form</h1>
        <p>If you are registered user, please login.</p>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
<br/>
</Container>        <Footer/>

        </Fragment> 
      );   
    }   
  }  
  export default Login; 