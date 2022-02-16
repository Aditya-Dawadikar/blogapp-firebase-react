import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { signoutAction } from '../redux/actions/UserActions'

const Navigation = () => {

  const [user, setuser] = useState(() => {
    const saved = sessionStorage.getItem('currUser')
    return JSON.parse(saved)
  })

  const dispatch = useDispatch()

  function handleSignout() {
    dispatch(signoutAction())
  }

  useEffect(() => {
    setuser(JSON.parse(sessionStorage.getItem('currUser')))
  }, [sessionStorage])


  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top" className='standard-shadow'>
      <Container>
        <Navbar.Brand href="/">Blog App</Navbar.Brand>
  
        {user !== null ? <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/explore">Explore</Nav.Link>
              <Nav.Link href="/user/me">My Content</Nav.Link>
              <Nav.Link href="/compose">Compose</Nav.Link>
            </Nav>
            <button className='btn btn-primary' style={{ borderRadius: "20px", minWidth: "100px", margin: "0px 10px 0px 10px" }} onClick={() => { handleSignout() }}>Logout</button>
          </Navbar.Collapse>
        </div> : <></>}

      </Container>
    </Navbar >
  )
}

export default Navigation