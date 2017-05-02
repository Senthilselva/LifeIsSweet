import '../../App.css';
import Heading from '../common/Heading';
import React, { Component } from 'react';
import PartnerList from './PartnerList';
import MessageList from './MessageList';
import ChatForm from './ChatForm';
import { __loadUser } from '../../lib/LISservice';

import '../Dashboard.css';
import { Flex, Layout, Fixed } from 'react-layout-pane';
import Nav from '../Nav.js'


class PartnerDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			heading: "", // String indicating if user is a caretaker or child
			userData : "",		
			selectedPartnerId : "",
			newMessage: 0
		}

		this._changePartner = this._changePartner.bind(this);
		this._addNewMessage = this._addNewMessage.bind(this);
	}

	_changePartner(id){
		this.setState({selectedPartnerId : id})
	}

	componentWillMount() {
    __loadUser(this.props.name)
      .then(userData => { 
        var userData =  userData[0];
        this.setState({userData:userData});
      });
    }
	
	_addNewMessage() {
		let count = this.setState.newMessage;
		this.setState({ newMessage : count })
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
									{this.state.userData.children ? (
									<PartnerList partners={this.state.userData.children} 
													_changePartner={this._changePartner}/>
									) : (
									<div></div>
									)
								    }
								</Flex>
							</Layout>
						</Fixed>
						<Flex className="content message-list">
						{this.state.selectedPartnerId!="" ? 
							(<div>
								<MessageList partnerId={this.state.selectedPartnerId}
									         _addNewMessage={this._addNewMessage} />
								<ChatForm partnerId={this.state.selectedPartnerId} />
							</div>) :
							(<div> </div>)
						}
						</Flex>
					</Layout>
					{/*<Chat />*/}
				</Flex>
			</Layout>
		);
	}
}


export default PartnerDashboard;
