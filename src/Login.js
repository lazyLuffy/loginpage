import React from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { userLogin } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


function Login() {
  const {message} = useSelector(state=>state.user)
  const navigate = useNavigate()
  const [validate,setValidate]=useState(false)
  const [emailValid,setEmailValid]= useState(false)
  const [passwordValid,setPasswordValid]= useState(false)
  let email_regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let password_regex = /^\s*(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/


    const dispatch = useDispatch()
    const [user,setUser]= useState({
        email: "",
        password:"",
    })

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!email_regex.test(user.email)){
          setEmailValid(true)
          return
        }
  
        else{
          setEmailValid(false)
        }
      
        if(!password_regex.test(user.password)){
          setPasswordValid(true)
          return;
        }
        else{
          setPasswordValid(false)
        }

        if(user.email!==''||user.password!==''){
          dispatch(userLogin(user))
          navigate('/users')
          
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
        setUser({
          email: "",
          password:"",
        })
      },[message])

  return (
    <div>
        <h1 className='container mb-12'>Login Form</h1>
        <Form className='container align-content-center' noValidate validated={validate} onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control pattern = {email_regex} isInvalid={emailValid}type="email" placeholder="Enter email" value={user.email} name='email' onChange={handleChange}/>
    <Form.Control.Feedback type="invalid">
              Please enter Vaild Email
      </Form.Control.Feedback>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" isInvalid={passwordValid} value={user.password} name="password" onChange={handleChange}/>
    <Form.Control.Feedback type="invalid">
              Please enter Vaild Password
      </Form.Control.Feedback>
  </Form.Group>
  <Button className="m-1"variant="primary" type="submit" >
    Submit
  </Button>
</Form>
    </div>
  )
}


export default Login