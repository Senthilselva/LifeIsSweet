import '../../App.css';
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {__writeMessage} from '../../lib/LISservice';
const io = require('socket.io-client');
const socket = io()


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
        if(this.state.message != ""){

        	__writeMessage(this.props.partnerId,this.state.message)
        	.then(data => {
                socket.emit('message',data);
                this.setState({message:""});              
        	});

        }
    }
	
	_handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value; 
        this.setState(newState);   
    }

    componentDidMount(){
        console.log(this.props.partnerId);
        socket.on(this.props.partnerId, (data)=>{
                    console.log("OOOOOOOOOOOOOOOOOO")
                    
                })
    }

    componentWillReceiveProps(){
        let that =this;
        console.log(this.props.partnerId);
        socket.on(this.props.partnerId, (data)=>{
                    console.log("OOOOOOOOOOOOOOOOOO")
                     console.log(that.props.partnerId)
                })
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