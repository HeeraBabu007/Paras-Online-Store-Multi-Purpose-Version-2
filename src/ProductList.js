import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { Component, Fragment } from 'react';  
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import image5 from './images/img5.jpg';
import image4 from './images/img4.jpg';
import image1 from './images/img0.jpg';
import image2 from './images/img1.jpg';
import image3 from './images/img2.jpg';

class ProductList extends Component {  

render() {   

  const products=[{id:1, name: 'Premium ButterScotch Cake', image: image4},
                  {id:2, name: 'Black Forest', image: image5},
                  {id:3, name: 'Blueberry Gateaux Cake', image: image3},
                  {id:4, name: 'Premium Black Forest Cake', image: image2},
                  {id:5, name: 'Sumptuous Strawberry Chocolate Cake', image: image1}];

return (  
 <Fragment>
          <Container>
          <h2>Cake and Pastries</h2>
          <p>Looking for delivery less than 3 hours?.</p>
          <p><strong>Note:</strong> There is no facility for less than 3 hours delivery.</p>
          <div class="card-columns">
          {products.map((item) => {
            return<div class="card  bg-warning" key={item.id}> 
                  <div class="card-body text-center">
                    <p class="card-text">  {item.name}</p>
                    <img class="card-img-top" src={item.image} alt="Card image"></img>
                    <p>TOTAL AMOUNT: ₹450</p>
                    <a href="#" class="btn btn-primary">CheckOut</a>
                  </div>
                </div>                
              })}
          </div>

        </Container>
  </Fragment> 
   );   
  }   
}  
  export default ProductList; 