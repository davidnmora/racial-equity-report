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
    const {selectedItemIndex} = this.state
    const selectedCounty = this.props.countyData[selectedItemIndex]

    return (
      <div>
        <AutoComplete
          floatingLabelText="Type 'peah', fuzzy search"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.props.countyData.map(d => d.county)}
          maxSearchResults={10}
          onNewRequest={(selectedText, index) => {
            this.setState({
              selectedItemIndex: index
            })
          }}
        />

        {/* Results: */}
        <p>
          {selectedItemIndex}
          {JSON.stringify(selectedCounty)}
          yo
        </p>
      </div>
    );
  }
}