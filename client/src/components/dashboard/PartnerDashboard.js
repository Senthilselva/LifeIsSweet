import '../../App.css';
import Heading from '../common/Heading';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PartnerList from './PartnerList';
import MessageList from './MessageList';

import '../Dashboard.css';
import { Flex, Layout, Fixed } from 'react-layout-pane';

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
				<Heading heading={this.props.heading} />
				<Flex>
					<Layout type="row">
						<Fixed className="sidebar">
							<Layout type="column">
								<Fixed>
									My Partners
								</Fixed>
								<Flex>
									<PartnerList className="partner-list" />
								</Flex>
							</Layout>
						</Fixed>
						<Flex className="content">
							<MessageList className="chat-form"/>
						</Flex>
					</Layout>
					{/*<Chat />*/}
				</Flex>
			</Layout>
		);

	}
}

export default PartnerDashboard;
