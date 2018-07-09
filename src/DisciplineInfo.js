import React, { Component } from 'react'
import './infosection.css'
import DisciplineLikelyhoodFocus from './components/LikelyhoodFocus/DisciplineLikelyhoodFocus'

export default class AcademicInfo extends Component {
	render() {
		const { data, demographics, districtName } = this.props
		return (
			<div className="academic-info">
				<h2 className="info-section-title">Discipline</h2>
				<div className="info-section-content-wrapper">
					<DisciplineLikelyhoodFocus
						compareRaceA={"white"}
						toRaceB={"black"}
						year={"2016-17"}
						
						data={data}
						demographics={demographics}
						districtName={districtName}
					/>
				</div>
				<TableView data={data} />
			</div>
		)
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