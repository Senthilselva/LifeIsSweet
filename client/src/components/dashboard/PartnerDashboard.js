import '../../App.css';
import './Dashboard.css';
import Heading from '../common/Heading';
import React, { Component } from 'react';
import PartnerList from './PartnerList';
import ChatForm from './ChatForm';

class PartnerDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			heading: "" // String indicating if user is a caretaker or child
		}
	}
	
	render() {

		return (
			<div className="App">
				<Heading heading={this.props.heading} />
				<PartnerList className="partner-list"/>
				<ChatForm className="chat-form"/>
				{/*<Chat />*/}
			</div>
		);

	}
}

export default PartnerDashboard;