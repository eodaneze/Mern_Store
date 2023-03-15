import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" className="" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          
          <Navbar.Brand>MernStore</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
              
              <Nav.Link><i className="fa fa-shopping-cart"></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              
              <Nav.Link><i className="fa fa-user"></i> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
