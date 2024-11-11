import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logobiru.png";
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const MyNavbar = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Navbar className="navbar-light bg-white" fixed="top" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-center align-content-center justify-content-center">
          <img src={logo} alt="Logo Belle Design Studio" className="d-inline-block" width="50" height="50"/>
          <h6 className="d-inline-block">Belle Design Studio</h6>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/get-in-touch">Get in Touch</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
