import '../../App.css';
import Heading from '../common/Heading';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PartnerList from './PartnerList';
import MessageList from './MessageList';

class PartnerDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			heading: "" // String indicating if user is a caretaker or child
		}
	}
	
	render() {

		return (
			<div>
				<Heading heading={this.props.heading} />
				<Row>
					<Col lg="3" sm="4">
						<PartnerList className="partner-list"/>
					</Col>
					<Col lg="9" sm="8">
						<MessageList className="chat-form"/>
					</Col>
					{/*<Chat />*/}
				</Row>
			</div>
		);

	}
}

export default PartnerDashboard;
