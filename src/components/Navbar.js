import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <BsNavbar.Brand href="/">Portfolio</BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BsNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/cv">CV</Nav.Link> {/* Tambahkan link untuk CV */}
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
