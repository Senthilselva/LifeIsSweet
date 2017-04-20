import '../App.css';
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
	constructor(props) {
	super(props);

	this.state = {
	    name:"",
	    password:""
	};

	    this._handleChange = this._handleChange.bind(this);
	    this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
    }

    _handleChange(event) {
        var newState = {};
        console.log(event.target.id +"   "+event.target.value);
        newState[event.target.id] = event.target.value;       
    }


//render- function
	render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Child</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
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
