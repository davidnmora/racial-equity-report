import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default class SearchBarAndResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      selectedItemIndex: undefined
    }
  }

  render() {
    const { selectedItemIndex } = this.state
    const selectedDistrictObject = selectedItemIndex === undefined ? {} : this.props.districtData[selectedItemIndex]
    console.log(selectedDistrictObject)

    return (
      <div>
        <BarChart width={730} height={250} data={this.props.districtData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="districtName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="leaCode" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>


        <AutoComplete
          floatingLabelText="Search a school district name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.props.districtData.map(d => d.districtName)}
          maxSearchResults={10}
          onNewRequest={(selectedText, index) => {
            this.setState({
              selectedItemIndex: index
            })
          }}
        />

        <div>
          <h3>{selectedDistrictObject ? selectedDistrictObject.districtName : "[none district selected]"}</h3>
          <table>
            <tbody>
              {Object.keys(selectedDistrictObject).map((propName, i) => {
                return (
                  <tr key={i}>
                    <td>{propName}</td>
                    <td>{selectedDistrictObject[propName]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}