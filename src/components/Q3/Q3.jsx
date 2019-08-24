import React, { Component } from 'react';
import { connect } from 'react-redux';

class Q3 extends Component {
    render() {
        return (
            <div>Third question!</div>
        )
    }
}

export default connect()(Q3);