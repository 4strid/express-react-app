import React from 'react'
import moment from 'moment'

import './ChatMessage.css'

const ChatMessage = props => (
	<p className="chat-message">
		<span className="chat-timestamp">
			{moment(props.date).format('h:mm:ss a')}
		</span>
		<span className={props.username === props.sender ? 'chat-sender-user' : 'chat-sender-else'}>
			{props.sender}:
		</span>
		<span className="chat-body">
			{props.body}
		</span>
	</p>
)

export default ChatMessage
