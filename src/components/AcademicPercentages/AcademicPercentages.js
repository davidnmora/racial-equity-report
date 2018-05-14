import React, { Component } from 'react'
import { RACES, YEARS, EOG_COLLEGE_READY } from '../../constants'
import { getDataFor } from '../../utils'
import './academicpercentages.css'
import PercentageChart from "../PercentageChart/PercentageChart"

export default class AcademicPercentages extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { data } = this.props
    return (
      <div className="academic-percentages-container">
        <PercentageChart data={getDataFor(EOG_COLLEGE_READY, RACES, YEARS[0], data)}/>
				<PercentageChart data={getDataFor(EOG_COLLEGE_READY, RACES, YEARS[0], data)}/>
				<PercentageChart data={getDataFor(EOG_COLLEGE_READY, RACES, YEARS[0], data)}/>
      </div>
    )
  }
}
