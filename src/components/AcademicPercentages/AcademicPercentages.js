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
			<div className="academic-percentages-container info-sub-container">
				<div className="academic-percentages-category-titles">
					<h2 className="info-sub-title career">Career and College Ready</h2>
					<h2 className="info-sub-title grad">Graduate HS in 4 years</h2>
				</div>
				<div className="academic-percentage-charts">
					<PercentageChart data={getDataFor(EOG_COLLEGE_READY.type, RACES.academicAchievement, YEARS[0], data)} title={EOG_COLLEGE_READY.title}/>
					<PercentageChart data={getDataFor(EOC_COLLEGE_READY.type, RACES.academicAchievement, YEARS[0], data)} title={EOC_COLLEGE_READY.title}/>
					<PercentageChart data={getDataFor(GRAD_IN_FOUR_YEARS.type, RACES.academicAchievement, YEARS[0], data)} title={GRAD_IN_FOUR_YEARS.title}/>
				</div>
			</div>
		)
	}
}
