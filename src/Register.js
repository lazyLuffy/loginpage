// import logo from './logo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userRegister } from './features/userSlice';
import { useEffect } from 'react';


function Register() {
  const {register_user} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const [user,setUser]= useState({
    
      firstName:"",
      lastName:"",
      email: "",
      password:"",
      phoneNumber:""
  })

  

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(user.firstName!==''|| user.lastName!==''||user.email!==''||user.password!==''||user.phoneNumber!==''){
      dispatch(userRegister(user))
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
    if(Object.keys(register_user).length>0){
      alert('Register Succesfully')
      setUser({
        firstName:"",
        lastName:"",
        email: "",
        password:"",
        phoneNumber:""
      })
    }
  },[register_user])


  return (
    <div className="form_container">
        <h1>Sign Up </h1>
    <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
  <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" value={user.firstName} placeholder="Enter Your FIrst Name" name="firstName" onChange={handleChange} />
    </Form.Group>
    <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" value={user.lastName} placeholder="Enter Your Last Name" name='lastName' onChange={handleChange} />
    </Form.Group>

    <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>Phone number +91</Form.Label>
      <Form.Control type="number" value = {user.phoneNumber} placeholder="+911221090" name="phoneNumber" onChange={handleChange}/>
    </Form.Group>
    <Form.Group as={Row} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={handleChange} />
    </Form.Group>

    <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={handleChange}/>
    </Form.Group>
  </Row>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Register;
