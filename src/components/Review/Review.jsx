import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleSubmit = () => {
        axios.post('feedback', this.props.reduxStore)
            .then(response => {
                this.props.history.push('/ThankYou');
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
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
                                    <i>{this.props.reduxStore.Q1.selectedValueDescription}</i>
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
                                    <i>{this.props.reduxStore.Q2.selectedValueDescription}</i>
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
                                <i>{this.props.reduxStore.Q3.selectedValueDescription}</i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Comments
                                </td>
                                <td colSpan="2">
                                    <i>{this.props.reduxStore.Q4}</i>
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