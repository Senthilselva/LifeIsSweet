import '../../App.css';
import Heading from '../common/Heading';
import React, { Component } from 'react';
//import { Container, Row, Col } from 'reactstrap';
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
			selectedPartnerId : ""
		}

		this._changePartner = this._changePartner.bind(this)
	}

	_changePartner(id){
		this.setState({selectedPartnerId : id})
	}

	componentWillMount() {
		console.log("componentDidMount"+this.props.name)
    __loadUser(this.props.name)
      .then(userData => { 
        console.log("User Data:")
       // console.log(userData[0].children)
        var userData =  userData[0];
        console.log(userData);
        this.setState({userData:userData});
        console.log("Senthil" + JSON.stringify(this.state.userData));

      });
    }
	
	render() {
		console.log("this.state.userData.children");
		console.log(this.state.userData.children)
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
													_changePartner = {this._changePartner}/>
									) : (
									<div></div>
									)
								    }
								</Flex>
							</Layout>
						</Fixed>
						<Flex className="content message-list">
						{this.state.selectedPartnerId != "" ? 
							(<MessageList partnerId={this.state.selectedPartnerId}/>) :
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
