import '../App.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
  NavLink
} from 'react-router-dom';

class SignUp extends Component {

//render- function
	render() {
    return (
      <div>
      <NavLink to='/signupchild'><Button>Child</Button></NavLink>
      <NavLink to='/signupcaretaker'><Button>Care Taker</Button></NavLink>
      </div>    
    );
	}//render
}

export default SignUp;
