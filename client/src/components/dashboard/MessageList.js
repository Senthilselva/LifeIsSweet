import '../../App.css';
import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class MessageList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [
				{ id: 1, text: "message 11" },
				{ id: 2, text: "message 2" },
				{ id: 3, text: "message 3" },
			]
		}
	}
	
	render() {

		return (
			<div className="App">
				<ListGroup>
					{
						this.state.messages.map(function(message){
							return(
								<ListGroupItem key={message.id}>{message.text}</ListGroupItem>
							)
						})
					}
				</ListGroup>
			</div>
		);

	}
}

export default MessageList;