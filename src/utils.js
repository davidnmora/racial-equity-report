export function getDataFor(type, racesArray, year, data) {
	const selectedData = {}
	racesArray.forEach(race => selectedData[race] = data[`${year} ${race}${type}`])
	return selectedData
}