import React from 'react'
import './likelyhoodfocus.css'

export default function DisciplineLikelyhoodFocus({ compareRaceA, toRaceB, year, data, demographics, districtName }){
	const totalSTS = data['STS TOTAL']
	return (
		<div className="info-sub-container likelyhood-focus-container">
			<div className="likelyhood-inner-wrapper">
				<div className="text">Of {districtName}'s {totalSTS} short term suspensions during the {year} school year,
					<span className={`bold text ${toRaceB}`}> {getSTSCount(toRaceB, data)} </span>
					went to {toRaceB} students ({getDemographicPercentage(toRaceB, demographics, year)} of the student population) and
					<span className={`bold text ${compareRaceA}`}> {getSTSCount(compareRaceA, data)} </span>
					went to {compareRaceA} students ({getDemographicPercentage(compareRaceA, demographics, year)} of the student population).
				</div>
				<div className="likelyhood-number">10</div>
				<h3 className="likely">short term suspensions to {toRaceB}</h3>
			</div>
		</div>
	)
}

function getSTSPercentage(race, data) {
	return data[`STS ${race.toUpperCase()} %`]
}

function getSTSCount (race, data) {
	return data['STS TOTAL'] * parseFloat(getSTSPercentage(race, data)) / 100
}

function getDemographicPercentage(race, demographics, year) {
	return demographics[`${year} Demographics ${race.toUpperCase()} %`]
}