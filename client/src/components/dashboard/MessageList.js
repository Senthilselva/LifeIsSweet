import '../../App.css';
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class MessageList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [
				{ id: 1, text: "message 1 jajfaoef   aeflkj  ajf" },
				{ id: 2, text: "message 2 asfjoa  aljkef ajiejjf" },
				{ id: 3, text: "message 3 afjaiew fjlasifj" },
				{ id: 4, text: "message 4 afiijfai fajiefia faiej;feofj" },
				{ id: 5, text: "message 5 this is s aejagiaemessage" },
				{ id: 6, text: "message 6 the lsate madaef" },
			]
		}
	}
	
	render() {

		return (
			<ListGroup>
				{
					this.state.messages.map(function(message){
						return(
							<ListGroupItem key={message.id}>{message.text}</ListGroupItem>
						)
					})
				}
			</ListGroup>
		);

	}
}

export default MessageList;