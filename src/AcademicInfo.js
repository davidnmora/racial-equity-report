import React, { Component } from 'react'
import { RACES, YEARS, EOG_COLLEGE_READY } from './constants'
import { getDataFor } from './utils'
import './infosection.css'
import LikelyhoodFocus from './components/LikelyhoodFocus/LikelyhoodFocus'
import AcademicPercentages from './components/AcademicPercentages/AcademicPercentages'

export default class AcademicInfo extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const { data } = this.props
		return (
			<div className="academic-info">
				<h2 className="info-section-title">Academic Achievement</h2>
				<div className="info-section-content-wrapper">
					<LikelyhoodFocus compareRaceA={"white"} toRaceB={"black"} likelyhood={this.getLikelyhood(data)} year={"2017-17"}/>
					<AcademicPercentages data={data} />
				</div>
				<table>
					<tbody>
					{Object.keys(data ? data : {}).map((propName, i) => {
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
	
	getLikelyhood(data) {
	  return data['Likelihood Ratio_EOG_College Ready_White to Black']
  }
}
