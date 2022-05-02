import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Register from "./Register";
import Login from './Login'
import Home from "./Home";
import UserData from "./UserData";

function App() {
  return (
    <div className='app'>
        <Router>
        <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route exact path={"/login"} element={<Login/>}/>
            <Route exact path={"/register"} element={<Register/>}/>     
            <Route exact path="/users" element={<UserData/>}/>
        </Routes>
        </Router>
    </div>
  )
}

export default App