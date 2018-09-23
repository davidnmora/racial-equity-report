import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import academicData from './data/academic-data.js'; // TO DO: unify discipline and academic into a single object
import disciplineData from './data/discipline-data.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBarAndResults from './SearchBarAndResults'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">SCSJ Racial Equity Report Card</h1>
            </header>
            <p className="App-intro">
              To get started, search for a school district and click it to view its report card.
            </p>
            <SearchBarAndResults districtData={ { academicData, disciplineData } } />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
