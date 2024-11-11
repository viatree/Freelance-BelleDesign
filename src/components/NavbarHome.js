import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo/logobiru.png';
import '../App.css';

const NavbarHome = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
    <Container>
      {/* <Navbar.Brand src={logo}>BrandName</Navbar.Brand> */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Item>
              <Nav.Link href="#" className="me-3">Home</Nav.Link>
            </Nav.Item>
          <Nav.Item>
              <Nav.Link href="#" className="me-3">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="me-3">Pricing</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Projects" id="basic-nav-dropdown" className="me-3">
              <NavDropdown.Item href="#action/3.1">Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Urban & ARchitecture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Interior - Exhibition</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="#" className="me-3">Get in Touch</Nav.Link>
            </Nav.Item>
          
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
  )
}

export default NavbarHome;