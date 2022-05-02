import React from 'react'
import { Button } from 'react-bootstrap'
import './home.css'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div className='home'>
        <div className='home-body'>
        <h1>
        Welcome Home Page
        </h1>
        <div className="home-button">
            <Button className="m-1" variant="primary" onClick={()=>navigate('/login')}>Login</Button>
            <Button className="m-4" variant="secondary" onClick={()=>navigate('/register')}>Register</Button>
        </div>
        </div>
    </div>
  )
}

export default Home