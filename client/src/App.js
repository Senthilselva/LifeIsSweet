import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Life is Sweet</h2>
          <p><i>We don't need extra Sugar</i></p>
        </div>
      </div>
    );
  }
}

export default App;
