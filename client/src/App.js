import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getTest } from './api'

class App extends Component {

	state = {
		heading: 'Hello react',
	}

	componentWillMount () {
		getTest().then(response => {
			this.setState({heading: response.data.message})
		}).catch(err => {
			this.setState({heading: 'Could not make the request'})
		})
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.heading}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
