import React, { Component } from 'react'
import './infosection.css'
import LikelyhoodFocus from './components/LikelyhoodFocus/LikelyhoodFocus'

export default class AcademicInfo extends Component {
	render() {
		const { data } = this.props
		return (
			<div className="academic-info">
				<h2 className="info-section-title">Discipline</h2>
				<div className="info-section-content-wrapper">
					<LikelyhoodFocus compareRaceA={"white"} toRaceB={"black"} likelyhood={this.getLikelyhood(data)} year={"2017-17"}/>
				</div>
				<TableView data={data} />
			</div>
		)
	}
	
	getLikelyhood(data) {
		return data['Likelihood ratio (Black to White)*']
	}
}

function TableView({data}) {
	return (
		<div className="discipline-info">
			<h2>Discipline</h2>
			<table>
				<tbody>
				{Object.keys(data ? data : {}).map((propName, i) => {
					return (
						<tr key={i}>
							<td>{propName}</td>
							<td>{data[propName]}</td>
						</tr>
					)
				})}
				</tbody>
			</table>
		</div>
	)
}