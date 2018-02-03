import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countyData from './county-data'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBarAndResults from './SearchBarAndResults'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { filter: "" }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <SearchBarAndResults countyData={countyData} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
