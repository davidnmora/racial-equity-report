import React, { Component } from 'react';

export class FilterTable extends Component {
    constructor(props) {
        super(props)
        this.state = { filter: "" }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={e => this.setState({ filter: e.currentTarget.value })} />
                <table>
                    {
                        this.props.countyData.filter(county => {
                            if (typeof county.county !== "string") return false
                            return county.county.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
                        })
                            .map(county =>
                                <tr>
                                    <td>{county.county}</td>
                                    <td>{county.medianIncome}</td>
                                </tr>
                            )
                    }
                </table>
            </div>
        );
    }
}