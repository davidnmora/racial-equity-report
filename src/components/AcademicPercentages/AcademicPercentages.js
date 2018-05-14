import React, { Component } from 'react'
import { RACES, YEARS, EOG_COLLEGE_READY, EOC_COLLEGE_READY, GRAD_IN_FOUR_YEARS } from '../../constants'
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
        <PercentageChart data={getDataFor(EOG_COLLEGE_READY.type, RACES, YEARS[0], data)} title={EOG_COLLEGE_READY.title}/>
				<PercentageChart data={getDataFor(EOC_COLLEGE_READY.type, RACES, YEARS[0], data)} title={EOC_COLLEGE_READY.title}/>
				<PercentageChart data={getDataFor(GRAD_IN_FOUR_YEARS.type, RACES, YEARS[0], data)} title={GRAD_IN_FOUR_YEARS.title}/>
      </div>
    )
  }
}
