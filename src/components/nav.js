import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNav = () => {
  return (
    <Navbar className='navbar' expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav nav-button" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <Nav.Link className='hover-underline mx-4 nav-link' href="/">Home</Nav.Link>
            <Nav.Link className='hover-underline mx-4 nav-link' href="/gallery">Gallery</Nav.Link>
            <Nav.Link className='hover-underline mx-4 nav-link' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNav;
