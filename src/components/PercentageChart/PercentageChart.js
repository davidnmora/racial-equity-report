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
	const axes = [0, 25, 50, 75, 100]
	return (
		<div className="dot-data-vis" style={{height: `${VIS_HEIGHT}px`}}>
			{axes.map((axis, i) => {
				return (
					<div key={`axis${i}`} className='percentage-chart-axis' style={{bottom: `${getYPosition(axis)}px`}}>
						<span>{`${axis}%`}</span>
					</div>
				)
			})}
			{Object.keys(data ? data : {}).map((race, i) => {
				return (
					<div key={i} className={`percent-data-point ${race}`} style={{bottom: `${getYPosition(data[race])}px`}}>
						{race}
					</div>
				)
			})}
		
		</div>
	)
}

function getYPosition(percentage) {
	return (percentage / 100) * VIS_HEIGHT
}