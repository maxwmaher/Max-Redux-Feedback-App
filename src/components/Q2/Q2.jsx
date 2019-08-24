import React, { Component } from 'react';
import { connect } from 'react-redux';

class Q2 extends Component {
    render() {
        return (
            <div>Second question!</div>
        )
    }
}

export default connect()(Q2);