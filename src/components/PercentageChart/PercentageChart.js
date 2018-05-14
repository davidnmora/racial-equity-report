import React, { Component } from 'react'
import './percentagechart.css'

export default class PercentageChart extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { data, title } = this.props
    return (
      <div className="percentage-chart-container">
        <div className="bold text">{title}</div>
				<table>
					<tbody>
					{Object.keys(data ? data : {}).map((race, i) => {
						return (
							<tr key={i}>
								<td>{race}</td>
								<td>{data[race]}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
      </div>
    )
  }
}
