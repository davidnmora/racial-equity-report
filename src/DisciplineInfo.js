import React, { Component } from 'react';
import './infosection.css'

export default class DisciplineInfo extends Component {
  render() {
    return (
      <div className="discipline-info">
        <h2>Discipline</h2>
        <table>
          <tbody>
            {Object.keys(this.props.data ? this.props.data : {}).map((propName, i) => {
              return (
                <tr key={i}>
                  <td>{propName}</td>
                  <td>{this.props.data[propName]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}