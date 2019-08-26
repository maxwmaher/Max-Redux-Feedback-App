import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';

class Q4 extends Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleNextClick = () => {
        if (this.state.comment.length > 300) {
            alert('Please make sure your comment is no more than 300 characters.')
            return false;
        }
        this.props.dispatch({ type: 'Q4', payload: this.state.comment })
        this.props.history.push('/Review')
    }

    commentValidator = () => {
        if (this.state.comment.length === 301) {
            return <span className="span-red">You have entered {-(300 - this.state.comment.length)} character beyond the maximum allowed. <br/> Please shorten this comment.</span>;
        } else if (this.state.comment.length > 300) {
            return <span className="span-red">You have entered {-(300 - this.state.comment.length)} characters beyond the maximum allowed. <br/> Please shorten this comment.</span>;
        } else if (this.state.comment.length === 299) {
            return <span>{300 - this.state.comment.length} character remaining</span>;
        } else {
            return <span>{300 - this.state.comment.length} characters remaining</span>;
        }
    }

    render() {

        return (
            <div className="div-Q4main">
                <div className="div-question">
                    <h5><b>Please feel free to leave any comments.</b></h5>
                </div>
                <div className="div-inputs">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <textarea onChange={this.handleChange} rows="6" cols="60" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td-charactersRemaining">
                                    {this.commentValidator()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
                <br />
                <p><span>
                    <Button onClick={this.handleNextClick} variant="outlined" color="primary" type="submit">
                        Next <NavigateNext />
                </Button>
                    </span></p>
            </div>
        )
    }
}

export default connect()(Q4);