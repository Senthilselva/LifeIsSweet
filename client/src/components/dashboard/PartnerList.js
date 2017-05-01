import '../../App.css';
import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import styled from 'styled-components';

class PartnerList extends Component {
	constructor(props) {
		super(props);

		
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit(id) {   
        console.log("click" + id);
        this.props._changePartner(id)
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
				<SideNav highlightColor='#E91E63 ' highlightBgColor='#00bcd4 ' onItemSelection={(id) => {this._handleSubmit(id)}}>      
					<Title><b> My Partners </b></Title>
					{
					this.props.partners.map(function(partner){
						return(
							<Nav key={partner._id} id={partner._id}>
								<NavText>{partner.name}</NavText>
							</Nav>
						)
					})
					}
				</SideNav>
			</div>
		)
	}

	_emptySideNav(){
		return(<div> Empty </div> )
	}
	
	render() {
		if(this.props.partners.length)
		return (
			<div>
				{this._sideNav()}
			</div>
		);

	}
}

PartnerList.propTypes = {
  partners: React.PropTypes.array
}

export default PartnerList;