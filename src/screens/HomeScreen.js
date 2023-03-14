import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products'
const HomeScreen = () => {
  return (
    <>
      <h1>latest Product</h1> 
      <Row>
         {
             products.map((product) => (
                 <Col sm={12} md={6} lg={4} xl={3}>
                     <img src={product.image} alt="" />
                 </Col>
             ))
         } 
    </Row>  
    </>
  )
}

export default HomeScreen