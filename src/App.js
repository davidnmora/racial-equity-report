import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countyData from './county-data'

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
        <input type="text" onChange={e => this.setState({ filter: e.currentTarget.value })} />
        <table>
          {
            countyData.filter(county => {
              if (typeof county.county !== "string" ) return false
              return county.county.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
            })
              .map(county =>
                <tr>
                  <td>{county.county}</td>
                  <td>{county.medianIncome}</td>
                </tr>
              )
          }
        </table>
      </div>
    );
  }
}

export default App;
