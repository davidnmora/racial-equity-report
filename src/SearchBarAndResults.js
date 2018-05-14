import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete'
import AcademicInfo from './AcademicInfo'
import DisciplineInfo from './DisciplineInfo'

export default class SearchBarAndResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDistrictName: ''
    }
  }

  render() {
    const { selectedDistrictName } = this.state
    const { districtData } = this.props

    return (
      <div className="body-container">
        <AutoComplete
          autoFocus={true}
          floatingLabelText="Search a school district name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={Object.keys(this.props.districtData.disciplineData)}
          maxSearchResults={10}
          onNewRequest={(selectedText, index) => {
            this.setState({
              selectedDistrictName: (districtData.disciplineData[selectedText] ? selectedText : '')
            })
          }}
        />

        {selectedDistrictName && <div className="info-sections-container">
          <h1>{selectedDistrictName ? selectedDistrictName : '[no district selected]'}</h1>
          <AcademicInfo data={districtData.academicData[selectedDistrictName]} />
          <DisciplineInfo data={districtData.disciplineData[selectedDistrictName]} />
        </div>}
      </div>
    )
  }
}
