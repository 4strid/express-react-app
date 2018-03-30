import React from 'react'

class MessageField extends React.Component {
	state = {
		message: '',
	}

	handleTyping = message => {
		this.setState({message})
	}

	render () {
		return (
			<div>
				<input value={this.state.message} onChange={evt => this.handleTyping(evt.target.value)}/>
				<button className='send-button' onClick={() => {
					this.props.handleSend(this.state.message)
					this.setState({message: ''})
				}}>Send</button>
			</div>
		)
	}
}

export default MessageField
