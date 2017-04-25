import '../App.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Heading from './common/Heading';
import DownloadFile from './DownloadFile';
import {__createUser} from '../lib/LISservice';

class SignUp extends Component {
	constructor(props) {
	super(props);

	this.state = {
	    name:"",
	    password:"",
	    child:1,
      basal:"",
      morningbolus : "",
      afternoonbolus : "",
      dinnerbolus : ""
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
          if(user.success){
            console.log(this.props);
            this.props.history.push('/dashboard');
          }
         })
    }

    _handleChange(event) {
        var newState = {};
        //console.log(event.target.id +"   "+event.target.value);
        newState[event.target.id] = event.target.value; 
        this.setState(newState);   
    }


//render- function
	render() {
    return (
      <div>
      <Heading heading={"Sign Up Your Child"} />
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
          <Label for="" sm={2}>Basal</Label>
          <Col sm={10}>
            <Input type="text" 
                   name="basal" 
                   id="basal" 
                   onChange={this._handleChange}
                   placeholder="Enter Basal" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="" sm={2}>Morning Bolus</Label>
          <Col sm={10}>
            <Input type="text" 
                   name="morningbolus" 
                   id="morningbolus" 
                   onChange={this._handleChange}
                   placeholder="Morning Bolus" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="" sm={2}>Afternoon Bolus</Label>
          <Col sm={10}>
            <Input type="text" 
                   name="afternoonbolus" 
                   id="afternoonbolus" 
                   onChange={this._handleChange}
                   placeholder="Afternoon Bolus" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="" sm={2}>Dinner Bolus</Label>
          <Col sm={10}>
            <Input type="text" 
                   name="dinnerbolus" 
                   id="dinnerbolus" 
                   onChange={this._handleChange}
                   placeholder="Dinner Bolus" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="" sm={2}>Picture</Label>
          <Col sm={10}>
            <DownloadFile filename={this.state.name} />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    );
	}//render
}

export default SignUp;
