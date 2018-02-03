import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import districtData from './data/lr-leas-16-17-testing-and-graduation.js'
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
          <SearchBarAndResults districtData={districtData} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
