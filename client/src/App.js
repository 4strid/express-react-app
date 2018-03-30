import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getMessages, sendMessage } from './api'

import NameField from './components/NameField'
import ChatWindow from './components/ChatWindow'
import ChatMessage from './components/ChatMessage'
import MessageField from './components/MessageField'

class App extends Component {

	state = {
		username: 'User',
		messages: [],
	}

	handleRename = username => {
		this.setState({username})
	}

	handleSend = message => {
		const messageModel = {
			sender: this.state.username,
			body: message,
		}
		sendMessage(messageModel).then(message => {
			this.setState({messages: [...this.state.messages, message]})
		}).catch(err => {
			console.error(err)
		})
	}

	pollMessages = () => {
		setInterval(() => {
			getMessages().then(messages => {
				this.setState({messages})
			}).catch(err => {
				console.error(err)
			})
		}, 2000)
	}

	componentWillMount () {
		getMessages().then(messages => {
			this.setState({messages})
		}).catch(err => {
			console.error(err)
		})
		this.pollMessages()
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {this.state.username}</h1>
        </header>

		<NameField username={this.state.username} handleRename={this.handleRename}/>
		<ChatWindow>
			{this.state.messages.map(message => (
				<ChatMessage key={message._id}
							 sender={message.sender}
							 body={message.body}
							 date={message.date}
							 username={this.state.username}
				 />
			))}
		</ChatWindow>
		<MessageField message={this.state.message} handleSend={this.handleSend}/>
      </div>
    );
  }
}

export default App;






