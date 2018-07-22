import React from 'react'
import './likelyhoodfocus.css'

const BASE_SUSPENSION_NUMBER = 10
const STS_RACES =['WHITE', 'BLACK', 'HISPANIC', 'INDIAN', 'MULTI-RACIAL', 'Asian']

export default function DisciplineLikelyhoodFocus(props){
	const { districtName } = props
	return (
		<div className="info-sub-container likelyhood-focus-container">
			<div className="likelyhood-inner-wrapper">
				<div className="text para-2">Take an equally-sized group of students from each racial group with available data at {districtName}:</div>
				<FirstSuspensionNumber race={STS_RACES[0]} />
				{STS_RACES.splice(1).map(race => {
					return <RaceSuspensionNumber {...props} compareRaceA={race} />
				})}
			</div>
		</div>
	)
}

function FirstSuspensionNumber({race}) {
	return (
		<div>
			<div className="text">for every</div>
			<div className={`likelyhood-number ${race}`}>{BASE_SUSPENSION_NUMBER}</div>
			<h3 className="likely">
				short term suspensions to <span className={`bold text ${race}`}>{race} students</span>
			</h3>
		</div>
	)
}

function RaceSuspensionNumber({compareRaceA, toRaceB, data, demographics, year}) {
	const count = (BASE_SUSPENSION_NUMBER * getLikelyhood(compareRaceA, toRaceB, data, demographics, year)).toFixed(1)
	return (
		<div>
			<div className={`likelyhood-number ${compareRaceA}`}>{count}</div>
			<h3 className="likely">
				short term suspensions would be given to <span className={`bold text ${compareRaceA}`}>{compareRaceA} students</span>
			</h3>
		</div>
	)
}


// OVERVIEW components

// MOVE TO OWN FILE EVENTUALLY?
export function Overview(props) {
	const { year, data, districtName } = props
	const totalSTS = data['STS TOTAL']
	return (
		<div className="info-sub-container">
			<div className="text">Of {districtName}'s {totalSTS} short term suspensions during the {year} school year,
				{STS_RACES.map(race => {
					return <RaceOverview {...props} race={race}/>
				})}
			</div>
			
		</div>
	)
}

function RaceOverview(props) {
	const { race, year, data, demographics } = props
	return (
		<div>
			<div className="text">
				<span className={`text ${race}`}>{`${getSTSCount(race, data)} (${getSTSPercentage(race, data)}%)`} </span>
				went to {race} students (<span className={`text ${race}`}>{getDemographicPercentage(race, demographics, year)}%</span> of the student population)
			</div>
		</div>
	)
}

// Data helper functions

function getSTSPercentage(race, data) {
	return data[`STS ${race.toUpperCase()} %`]
}

function getSTSCount (race, data) {
	return data['STS TOTAL'] * parseFloat(getSTSPercentage(race, data)) / 100
}

function getDemographicPercentage(race, demographics, year) {
	return demographics[`${year} Demographics ${race.toUpperCase()} %`]
}

function getLikelyhood(compareRaceA, toRaceB, data, demographics, year) {
	const compareRaceAProportionality = getSTSPercentage(compareRaceA, data) / getDemographicPercentage(compareRaceA, demographics, year)
	const toRaceBProportionality = getSTSPercentage(toRaceB, data) / getDemographicPercentage(toRaceB, demographics, year)
	return compareRaceAProportionality / toRaceBProportionality
}