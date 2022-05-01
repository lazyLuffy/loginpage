import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Register from "./Register";
import Login from './Login'


function App() {
  return (
    <div className='app'>
        <Router>
        <Switch>
            <Route exact path={"/"}>
                <h1>Hey I am Empty</h1>
            </Route>
            <Route exact path={"/login"}>
              <Login/>
            </Route>
            <Route exact path={"/register"}>
              <Register/>
            </Route>
        </Switch>
        </Router>
    </div>
  )
}

export default App