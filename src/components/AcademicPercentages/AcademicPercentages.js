import React, { Component } from 'react'
import './academicpercentages.css'
import PercentageChart from "../PercentageChart/PercentageChart";

export default class AcademicPercentages extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { data } = this.props.data
    return (
      <div className="academic-percentages-container">
        <PercentageChart data={data}/>
				<PercentageChart data={data}/>
				<PercentageChart data={data}/>
      </div>
    )
  }
}
