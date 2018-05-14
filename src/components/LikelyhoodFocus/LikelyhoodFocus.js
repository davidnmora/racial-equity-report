import React, { Component } from 'react'
import './likelyhoodfocus.css'

export default function LikelyhoodFocus({ compareRaceA, toRaceB, likelyhood, year }){
	return (
		<div className="info-sub-container likelyhood-focus-container">
			<div className="likelyhood-inner-wrapper">
				<div className="text">For 3rd-8th graders in the {year} school year,
					<span className="bold text"> {compareRaceA} students </span>
					were
				</div>
				<div className="likelyhood-number">{likelyhood}x</div>
				<h3 className="likely">more likely</h3>
				<div className="text">
					than
					<span className="bold text"> {toRaceB} students </span>
					to score
					<span className="bold text"> {"'Career and College Ready'"} </span>
					on end-of-grade exams.
				</div>
			</div>
		</div>
	)
}
