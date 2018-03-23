import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchBarAndResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDistrictName: ''
    }
  }

  render() {
    console.log("prop.districtData", this.props.districtData)
    const { selectedDistrictName } = this.state
    const { districtData }         = this.props

    return (
      <div>
        <AutoComplete
          floatingLabelText="Search a school district name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={Object.keys(this.props.districtData.disciplineData)}
          maxSearchResults={10}
          onNewRequest={(selectedText, index) => {
            console.log('selectedText:', selectedText)
            // TO DO: HANDLE INCOMPLETE ENTER-KEY SUBMIT (e.g. 'Scho' instead of 'School X')
            this.setState({
              selectedDistrictName: selectedText
            })
          }}
        />

        <div>
          <h1>{selectedDistrictName ? selectedDistrictName : "[no district selected]"}</h1>
          <AcademicInfo   data={districtData.academicData  [selectedDistrictName]} />
          <DisciplineInfo data={districtData.disciplineData[selectedDistrictName]} />
        </div>
      </div>
    );
  }
}

class AcademicInfo extends Component {
  render() {
    return (
      <div>
        <h2>Academic</h2>
        <table>
          <tbody>
            {Object.keys(this.props.data ? this.props.data : {}).map((propName, i) => {
              return (
                <tr key={i}>
                  <td>{propName}</td>
                  <td>{this.props.data[propName]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

class DisciplineInfo extends Component {
  render() {
    return (
      <div>
        <h2>Discipline</h2>
        <table>
          <tbody>
            {Object.keys(this.props.data ? this.props.data : {}).map((propName, i) => {
              return (
                <tr key={i}>
                  <td>{propName}</td>
                  <td>{this.props.data[propName]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}