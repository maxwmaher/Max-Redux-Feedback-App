import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class ThankYou extends Component {

    handleClick = () => {
        this.props.dispatch({
            type: 'CLEAR'
        });
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h3>Thank you for your feedback!</h3>
                <br/>
                <p>We appreciate hearing from you.</p>
                <br/>
                <p>
                    <Button onClick={this.handleClick} variant="contained" color="primary" type="submit">
                        Leave New Feedback
                </Button>
                </p>
            </div>
        )
    }
}

export default connect()(ThankYou);