import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer'
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
        <div>
          {/* <PeopleContainer /> */}
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">SCSJ Racial Equity Report Card</h1>
            </header>
            <p className="App-intro">
              To get started, search for a school district and click it to view its report card.
            </p>

            <SearchBarAndResults districtData={districtData} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
