import '../../App.css';
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

class ChatForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ""
		}
	}
	
	render() {

		return (
			<div className="App">
				<Form />
			</div>
		);

	}
}

export default ChatForm;