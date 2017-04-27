import '../../App.css';
import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import styled from 'styled-components';

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
	_sideNav() {
		const Title = styled.div`
		    padding: 12px;
		    padding-left: 55px;
		    color: lightblue;
		    background: grey;    
		`;

		return (
			<div style={{background: '#2c3e50 ', color: '#FFF', width: 220}}>
				<SideNav highlightColor='#E91E63 ' highlightBgColor='#00bcd4 ' defaultSelected='sales'>      
					<Title> My Partners! </Title>
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
			<div>
				{this._sideNav()}
			</div>
		);

	}
}

export default PartnerList;