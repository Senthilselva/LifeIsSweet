import '../../App.css';
import Heading from '../common/Heading';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PartnerList from './PartnerList';
import MessageList from './MessageList';

import '../Dashboard.css';
import { Flex, Layout, Fixed } from 'react-layout-pane';
import Nav from '../Nav.js'

class PartnerDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			heading: "" // String indicating if user is a caretaker or child
		}
	}
	
	render() {

		return (
			<Layout type="column">
				<Nav />
				<Heading heading={this.props.heading} />
				<Flex>
					<Layout type="row">
						<Fixed className="sidebar">
							<Layout type="column" className="partner-list">
								<Flex>
									<PartnerList />
								</Flex>
							</Layout>
						</Fixed>
						<Flex className="content message-list">
							<MessageList />
						</Flex>
					</Layout>
					{/*<Chat />*/}
				</Flex>
			</Layout>
		);

	}
}

export default PartnerDashboard;
