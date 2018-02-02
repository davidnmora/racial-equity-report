import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countyData from './county-data'
import { FilterTable } from './FilterTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { filter: "" }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterTable countyData={countyData} />
      </div>
    );
  }
}

export default App;
