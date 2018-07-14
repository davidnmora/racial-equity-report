import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete'
import AcademicInfo from './AcademicInfo'
import DisciplineInfo from './DisciplineInfo'

export default class SearchBarAndResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDistrictName: 'Alexander County Schools' // TEMPORARY FOR DEVELOPMENT EASE
    }
  }

  render() {
    const { selectedDistrictName } = this.state
    const { disciplineData, academicData } = this.props.districtData

    return (
      <div className="body-container">
        <AutoComplete
          autoFocus={true}
          floatingLabelText="Search a school district name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={Object.keys(disciplineData)}
          maxSearchResults={10}
          onNewRequest={(selectedText, index) => {
            this.setState({
              selectedDistrictName: (disciplineData[selectedText] ? selectedText : '')
            })
          }}
        />

        {selectedDistrictName && <div className="info-sections-container">
          <h1>{selectedDistrictName ? selectedDistrictName : '[no district selected]'}</h1>
          {/*<AcademicInfo data={academicData[selectedDistrictName]} />*/}
          <DisciplineInfo
            data={disciplineData[selectedDistrictName]}
            demographics={academicData[selectedDistrictName]}
            districtName={selectedDistrictName}
          />
        </div>}
      </div>
    )
  }
}
