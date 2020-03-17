import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Into the Woods</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Projects}/>
              <Route path="/contact" component={Contact}/>
            </div>
      </div>
    </HashRouter>
  );
}

export default App;
