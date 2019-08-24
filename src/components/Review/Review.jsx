import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    handleSubmit = () => {
        this.props.history.push('/ThankYou')
    }

    render() {

        return (
            <div className="div-review">
                <div className="div-question">
                    <h3><b>Please review your feedback.</b></h3>
                </div>
                <div className="div-inputs">
                    <table className="table-review">
                            <thead>
                                <tr>
                                    <th className="thead-1" width="15%">
                                        Area
                                    </th>
                                    <th className="thead-2" width="10%">
                                        Score
                                    </th>
                                    <th className="thead-3" width="75%">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Feeling
                                </td>
                                <td>
                                    {this.props.reduxStore.Q1.selectedValueScore}
                                </td>
                                <td>
                                    {this.props.reduxStore.Q1.selectedValueDescription}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Understanding
                                </td>
                                <td>
                                    {this.props.reduxStore.Q2.selectedValueScore}
                                </td>
                                <td>
                                    {this.props.reduxStore.Q2.selectedValueDescription}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Support
                                </td>
                                <td>
                                    {this.props.reduxStore.Q3.selectedValueScore}
                                </td>
                                <td>
                                    {this.props.reduxStore.Q3.selectedValueDescription}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Comments
                                </td>
                                <td colSpan="2">
                                    {this.props.reduxStore.Q4}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                <br />
                <p><span><button onClick={this.handleSubmit}>Submit</button></span></p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);