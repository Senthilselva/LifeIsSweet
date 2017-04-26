import '../../App.css';
import React, { Component } from 'react';
//import { ListGroup, ListGroupItem } from 'reactstrap';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

class PartnerList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			partners: [ 
				{ id: 1, name: "John" }, 
				{ id: 2, name: "Paul" }, 
				{ id: 3, name: "George" }, 
				{ id: 4, name: "Ringo" }
			]
		}
	}

	//specify the base color/background of the parent container if needed 
	sideNav() {
		return (
			<div style={{background: '#2c3e50 ', color: '#FFF', width: 220}}>
				<SideNav highlightColor='#E91E63 ' highlightBgColor='#00bcd4 ' defaultSelected='sales'>      
					<Nav id="0">
						<NavText> My Partners </NavText>
					</Nav>
					{
					this.state.partners.map(function(partner){
						return(
							<Nav key={partner.id} id={partner.id}>
								<NavText>{partner.name}</NavText>
							</Nav>
						)
					})
					}
				</SideNav>
			</div>
		)
	}
	
	render() {

		return (
			<div className="App">
				{this.sideNav()}
			</div>
		);

	}
}

export default PartnerList;