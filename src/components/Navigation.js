import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className='standard-shadow'>
      <Container>
        <Navbar.Brand href="/">Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/user/me">My Content</Nav.Link>
          </Nav>
          <button className='btn btn-primary' style={{borderRadius:"20px",minWidth:"100px",margin:"0px 10px 0px 10px"}}>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default Navigation