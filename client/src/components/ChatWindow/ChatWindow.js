import React from 'react'

import './ChatWindow.css'

const ChatWindow = props => (
	<div className="window">
		{props.children}
	</div>
)

export default ChatWindow
