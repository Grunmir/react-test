import React, { Component } from 'react'
import Questions from './pages/Questions'

import './App.css'

class App extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>React Test</h1>
        <Questions />
      </header>
    )
  }
}

export default App
