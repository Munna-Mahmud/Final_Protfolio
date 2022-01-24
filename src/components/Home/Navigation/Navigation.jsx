import React from 'react';

import { Navbar, Container, Offcanvas, Nav, } from 'react-bootstrap';
import './Navigation.css'
// import { Link } from 'react-router-dom';
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">MUNNA BABU</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img style={{width:"25%", borderRediou:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoyxKFEuvRklwj-zG5M6iooW4JSJDALhNsg&usqp=CAU" alt="" /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                <Nav.Link as={HashLink} to="/protfolio">Protfolio</Nav.Link>
                {/* <Nav.Link as={HashLink} to="/home#exoticPlaces">ExoticPlaces</Nav.Link> */}
                {/* <Nav.Link as={HashLink} to="/about">About US</Nav.Link> */}
                <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>
                <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
