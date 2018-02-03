import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchBarAndResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      selectedItemIndex: -1
    }
  }

  render() {
    const { selectedItemIndex } = this.state
    const selectedDistrictObject = this.props.districtData[selectedItemIndex]

    return (
      <div>
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

        {/* Results: */}
        <div>
          <h3>Index: {selectedItemIndex}</h3>
          <h3>{selectedDistrictObject ? selectedDistrictObject.districtName : "[none district selected]"}</h3>
          yo
        </div>
      </div>
    );
  }
}