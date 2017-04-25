import '../App.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
  NavLink
} from 'react-router-dom';
import Heading from './common/Heading';

class SignUp extends Component {

//render- function
	render() {
    return (
      <div className="App">
	      <Heading heading={"Sign Up"} />
	      <NavLink to='/signupchild'><Button>Child</Button></NavLink>
	       <span> {'\t'} </span>
	      <NavLink to='/signupcaretaker'><Button>Care Taker</Button></NavLink>
      </div>    
    );
	}//render
}

export default SignUp;
