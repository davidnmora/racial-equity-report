import React, { Component } from 'react'
import './percentagechart.css'

const VIS_HEIGHT = 500;

export default class PercentageChart extends Component {
	render() {
		const { data, title } = this.props
		return (
			<div className="percentage-chart-container">
				<div className="bold text">{title}</div>
				<DotDataVis data={data} />
			</div>
		)
	}
}

function DotDataVis({ data }) {
	return (
		<div className="dot-data-vis" style={{height: `${VIS_HEIGHT}px`}}>
			{Object.keys(data ? data : {}).map((race, i) => {
				return (
					<div key={i} className={`percent-data-point ${race}`} style={{bottom: `${getPointPosition(data[race])}px`}}>
						{race}
					</div>
				)
			})}
		
		</div>
	)
}

function getPointPosition(percentage) {
	return (percentage / 100) * VIS_HEIGHT
}