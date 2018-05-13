import React, { Component } from 'react';

export default class AcademicInfo extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="academic-info">
        <h2>Academic</h2>
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
