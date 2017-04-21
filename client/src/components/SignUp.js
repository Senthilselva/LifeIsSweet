import '../App.css';
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {__createUser} from '../lib/LISservice';

class SignUp extends Component {
	constructor(props) {
	super(props);

	this.state = {
	    name:"",
	    password:"",
	    child:0,
	};

	    this._handleChange = this._handleChange.bind(this);
	    this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
        var newUser = this.state;
        
        __createUser(newUser)
         .then(user => {
          console.log(user);
         })
    }

    _handleChange(event) {
        var newState = {};
        console.log(event.target.id +"   "+event.target.value);
        newState[event.target.id] = event.target.value; 
        this.setState(newState);   
    }


//render- function
	render() {
    return (
      <Form onSubmit={this._handleSubmit}>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" 
                   name="name" 
                   id="name" 
                   onChange={this._handleChange}
                   placeholder="Enter your Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="userPassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" 
                   name="password" 
                   id="password" 
                   onChange={this._handleChange}
                   placeholder="Enter your Password" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="isChild" sm={2}>Child</Label>
          <Col sm={10}>
            <Input type="select" 
                   name="select" 
                   id="isChild"
                   onChange={this._handleChange}>
            <option>Child</option>
            <option>Care Taker</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
	}//render
}

export default SignUp;
