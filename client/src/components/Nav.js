import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {
  NavLink
} from 'react-router-dom';
import './Nav.css';
import logo from '../logo.png';



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand> 
          <img src={logo} className="Nav-logo" alt="logo" />
           Life Is Sweet
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to='/signup'> Sign Up </NavLink>
                <NavLink to='/signIn'> Sign In </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/dashboard'> Dashboard </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// Navbar.propTypes = {
//   light: PropTypes.bool,
//   inverse: PropTypes.bool,
//   full: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

// NavbarBrand.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }