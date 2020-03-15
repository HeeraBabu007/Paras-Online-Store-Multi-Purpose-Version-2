import React, { Fragment } from 'react';
import './App.css';
import ControlledCarousel from './slider';
import ProductList from './ProductList';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
      <Fragment>
        <ControlledCarousel></ControlledCarousel>
        <Container>
        <h1 style={{color: "Green"}}>Start Shopping Today And Get 10% Discount!</h1>  
        <p>Add your product in cart to select convienient payment option to shop online.</p>  
        <ProductList/>
        </Container>
        <Footer/>
     </Fragment>
  );
}

export default App;
