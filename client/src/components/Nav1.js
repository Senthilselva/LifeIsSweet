//import './Nav.css';
import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom'

class Nav extends Component {
  render() {
    
    return (
        <nav style>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/signIn'>Sign In</NavLink>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </nav>  
    );
  }
}

export default Nav;
