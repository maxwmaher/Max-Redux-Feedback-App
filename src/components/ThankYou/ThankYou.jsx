import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <h2>Thank you for your feedback!</h2>
                <img src="https://miro.medium.com/max/612/1*sz3x5iKbBV_iJ2-47CmfIA.jpeg" alt="gold star"/>
                <p><button onClick={this.handleClick}>Leave New Feedback</button></p>
            </div>
        )
    }
}

export default connect()(ThankYou);