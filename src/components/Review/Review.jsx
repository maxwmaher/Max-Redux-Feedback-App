import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';

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
    }; //Submits all the information from Redux into the SQL server.
    
    render() {

        return (
            <div className="div-review">
                <div className="div-question">
                    <h5><b>Please review your feedback.</b></h5>
                </div>
                <br/>
                <div className="div-inputs">
                    <table className="table-review table-hover">
                        <thead className="thead-dark">
                                <tr>
                                    <th className="thead-1" width="25%">
                                        Area
                                    </th>
                                    <th className="thead-2" width="15%">
                                        Score
                                    </th>
                                    <th className="thead-3" width="60%">
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
                            </tr> {/* Displays the Q1 (Support) answers. */}
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
                            </tr> {/* Displays the Q2 (Understanding) answers. */}
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
                            </tr> {/* Displays the Q3 (Support) answers. */}
                        </tbody>
                    </table>
                </div>
                <br/>
                <h6>Comments:</h6> <i>{this.props.reduxStore.Q4}</i> {/* Displays the Comment. */}
                <br /><br/>
                <p><span>
                    <Button onClick={this.handleSubmit} variant="outlined" color="primary" type="submit">
                        Next <NavigateNext />
                </Button>
                    </span></p>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
// Need to define this as we are now displaying information from Redux to the DOM.

export default connect(mapStateToProps)(Review);