import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import {login,signup,signin} from '../services/UserService'

const Login = () => {

  const [loginobject, setloginobject] = useState(null)

  function handleChange(e) {
    setloginobject({ ...loginobject, [e.target.name]: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault()
    login(loginobject)
  }

  useEffect(() => {
    // console.log(loginobject)
  }, [loginobject])

  return <div className="card standard-shadow p-3">
    <h3>Login</h3>
    <form className="m-2">
      <label>Email</label>
      <input type="email" className='form-control' placeholder="johndoe@gmail.com" name="email" required onChange={(e) => { handleChange(e) }} />
      <label>Password</label>
      <input type="password" className='form-control' placeholder="********" name="password" required onChange={(e) => { handleChange(e) }} />
      <br />
      <button className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Login</button>
    </form>
  </div>
}

const Signup = () => {
  const [signupobject, setsignupobject] = useState(null)

  function handleChange(e) {
    setsignupobject({ ...signupobject, [e.target.name]: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault()
    signup(signupobject)
  }

  useEffect(() => {
    // console.log(signupobject)
  }, [signupobject])

  return <div className="card standard-shadow p-3">
    <h3>Signup</h3>
    <form className="m-2">
      <label>Email</label>
      <input type="email" className='form-control' placeholder="johndoe@gmail.com" name="email" required  onChange={(e) => { handleChange(e) }}/>
      <label>Password</label>
      <input type="password" className='form-control' placeholder="********" name="password" required  onChange={(e) => { handleChange(e) }}/>
      <label>Confirm Password</label>
      <input type="password" className='form-control' placeholder="********" name="cpassword" required  onChange={(e) => { handleChange(e) }}/>
      <br />
      <button className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Signup</button>
    </form>
  </div>
}

const Landing = () => {
  return <div>
    <div className='container content-start m-3'>
      <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" >
        <Tab eventKey="signup" title="signup">
          <Signup />
        </Tab>
        <Tab eventKey="login" title="login">
          <Login />
        </Tab>
      </Tabs>
    </div>
  </div>
}

export default Landing