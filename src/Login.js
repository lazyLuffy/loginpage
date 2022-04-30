import React from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { userLogin } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Login() {
    const {message} = useSelector(state=>state.user)
    
    const dispatch = useDispatch()
    const [user,setUser]= useState({
        email: "",
        password:"",
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.email!==''||user.password!==''){
          dispatch(userLogin(user))
        }
        
      }
    
      const handleChange=(e)=>{
        const {name,value}=e.target
        setUser(prevState=>({
          ...prevState,
          [name]:value
        }))
      }

      useEffect(()=>{
        if(message==="success"){
            alert("login SuccessFull")
        }
      },[message])

  return (
    <div>
        <h1 className='container mb-12'>Login Form</h1>
        <Form className='container align-content-center' onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={user.email} name='email' onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={handleChange}/>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
    </div>
  )
}


export default Login