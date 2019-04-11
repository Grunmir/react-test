import React, { Component } from 'react';
import Questions from './pages/Questions'

import './App.css';

class App extends Component {
  render() {
    return (
      <header className="App-header">
        <p>React Test</p>
        <Questions />
      </header>
    );
  }
}

export default App;
