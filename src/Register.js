// import logo from './logo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userRegister } from './features/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const {register_user} = useSelector(state=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [validate,setValidate]=useState(false)
  const [passwordValid,setPasswordValid]=useState(false)
  const [firstNameValid,setFirstNameValid]=useState(false)
  const [phoneValid,setPhoneValid]=useState(false)
  const [emailValid,setEmailValid]=useState(false)
  let regex_phone = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  let first_name = /^[A-Za-z]*$/
  let email_regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let password_regex = /^\s*(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/


  const [user,setUser]= useState({
    
      firstName:"",
      lastName:"",
      email: "",
      password:"",
      phoneNumber:""
  })

  

  const handleSubmit=(event)=>{
    event.preventDefault()
    
      
      if(!first_name.test(user.firstName)){

        setFirstNameValid(true)
        return;
      }
      else{
        setFirstNameValid(false)
      
    }
    
      
      if(!email_regex.test(user.email)){
        setEmailValid(true)
        return;
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
    
    
      
      if(!regex_phone.test(user.phoneNumber)){
        
        setPhoneValid(true)
        return;
      }
      else{
        setPhoneValid(false)
      }
    
  
     
      dispatch(userRegister(user))
    
    setValidate(true)
   
    
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
    <Form noValidate validated={validate} onSubmit={handleSubmit}>
  <Row className="mb-3">
  <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" value={user.firstName} placeholder="Enter Your FIrst Name" name="firstName" onChange={handleChange} isInvalid={firstNameValid} required/>
      <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" value={user.lastName} placeholder="Enter Your Last Name" name='lastName' onChange={handleChange} />
    </Form.Group>

    <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>Phone number +91</Form.Label>
      <Form.Control type="text" value = {user.phoneNumber} placeholder="+911221090"  name="phoneNumber" onChange={handleChange} isInvalid={phoneValid} required/>
      <Form.Control.Feedback type="invalid">
              Please enter VaildNumber
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Row} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" isInvalid={emailValid} value={user.email} name="email" onChange={handleChange} required/>
      <Form.Control.Feedback type="invalid">
              Please enter Vaild Email
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Row} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={user.password} isInvalid={passwordValid}  name="password" onChange={handleChange} required/>
      <Form.Control.Feedback type="invalid">
              Please enter Vaild Password
      </Form.Control.Feedback>
    </Form.Group>
  </Row>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
  <Button  className="m-3" variant="secondary" onClick={()=>navigate('/login')}>
    Login
  </Button>
</Form>
    </div>
  );
}

export default Register
