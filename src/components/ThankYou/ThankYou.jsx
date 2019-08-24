import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {
    render() {
        return (
            <div>Thank You page!</div>
        )
    }
}

export default connect()(ThankYou);