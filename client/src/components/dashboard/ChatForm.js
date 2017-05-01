import '../../App.css';
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {__writeMessage} from '../../lib/LISservice';
const io = require('socket.io-client')  

class ChatForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ""
		}

		this._handleChange = this._handleChange.bind(this);
	    this._handleSubmit = this._handleSubmit.bind(this);
	}

	 _handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
        console.log(this.props.partnerId)
        if(this.state.message != ""){
        	__writeMessage(this.props.partnerId,this.state.message)
        	.then(data => {
        		console.log("Data:");
        		console.log(data);
                const socket = io()
                socket.emit('message',data);
                this.setState({message:""});

        	})
        }
    }
	
	_handleChange(event) {
        var newState = {};
        //console.log(event.target.id +"   "+event.target.value);
        newState[event.target.id] = event.target.value; 
        this.setState(newState);   
    }

	render() {

		return (
            <div>
            <Form onSubmit={this._handleSubmit}>
                    <FormGroup row>
                      <Label for="" sm={2}>Message</Label>
                      <Col sm={6}>
                        <Input type="text" 
                                name="message" 
                                id="message" 
                                onChange={this._handleChange}
                                placeholder="enter details" />
                      </Col>
                   
                      <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                      </Col>
                    </FormGroup>

                  </Form>
                </div>
		);

	}
}

export default ChatForm;