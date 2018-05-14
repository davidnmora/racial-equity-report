import React, { Component } from 'react'
import './percentagechart.css'

export default class PercentageChart extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { data } = this.props
    return (
      <div className="percentage-chart-container">
        <h3 className="info-sub-title">Academic Percentages</h3>
      </div>
    )
  }
}
