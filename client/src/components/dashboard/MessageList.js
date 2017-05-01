import '../../App.css';
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {__loadChild} from '../../lib/LISservice';

class MessageList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [
				"message 1 jajfaoef   aeflkj  ajf",
				"message 2 asfjoa  aljkef ajiejjf",
				"message 3 afjaiew fjlasifj",
				"message 4 afiijfai fajiefia faiej;feofj",
				"message 5 this is s aejagiaemessage",
				"message 6 the lsate madaef"
			]
		}

		
	}
	componentWillReceiveProps(nextProps){
		__loadChild(this.props.partnerId)
		.then(childData => {
			console.log(childData.chat);
			this.setState({messages : childData.chat})
			console.log(this.state.messages)
		})
	}
	render() {
		console.log(this.props.partnerId)
		return (
			<ListGroup>
				{
					this.state.messages.map(function(message){
						return(

							<ListGroupItem key={message}>{message}</ListGroupItem>
						)
					})
				}
			</ListGroup>
		);

	}
}

export default MessageList;