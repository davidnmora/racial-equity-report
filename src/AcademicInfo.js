import React, { Component } from 'react'
import './infosection.css'
import LikelyhoodFocus from './components/LikelyhoodFocus/LikelyhoodFocus'
import AcademicPercentages from './components/AcademicPercentages/AcademicPercentages'

export default class AcademicInfo extends Component {
	render() {
		const { data } = this.props
		return (
			<div className="academic-info">
				<h2 className="info-section-title">Academic Achievement</h2>
				<div className="info-section-content-wrapper">
					<LikelyhoodFocus compareRaceA={"white"} toRaceB={"black"} likelyhood={this.getLikelyhood(data)} year={"2016-17"}/>
					<AcademicPercentages data={data} />
				</div>
			</div>
		)
	}
	
	getLikelyhood(data) {
	  return data['Likelihood Ratio_EOG_College Ready_White to Black']
  }
}
