import React, { Component } from 'react';
import { connect } from 'react-redux';

class Q1 extends Component {

    state = {
        showWorst: false,
        showWorse: false,
        showNeutral: false,
        showBetter: false,
        showBest: false
    }

    toggleWorst = () => {
        console.log('toggle working');
        this.setState({
            showWorst: !this.state.showWorst
        })
    }

    toggleWorse = () => {
        console.log('toggle working');
        this.setState({
            showWorse: !this.state.showWorse
        })
    }

    toggleNeutral = () => {
        console.log('toggle working');
        this.setState({
            showNeutral: !this.state.showNeutral
        })
    }

    toggleBetter = () => {
        console.log('toggle working');
        this.setState({
            showBetter: !this.state.showBetter
        })
    }

    toggleBest = () => {
        console.log('toggle working');
        this.setState({
            showBest: !this.state.showBest
        })
    }

    render() {
        return (
            <div className="div-Q1main">
                <div className="div-question">
                    <h3><b>How are you feeling today?</b></h3>
                </div>
                <div className="div-inputs">
                    <table>
                        <tbody>
                            <tr>
                                <td className="td-first" onMouseEnter={this.toggleWorst} onMouseLeave={this.toggleWorst}>
                                    <input className="input-radio" type="radio" id="1" name="Q1" value="1" />
                                    <br/>
                                    <label htmlFor="1">1</label>
                                </td>
                                <td className="td-first" onMouseEnter={this.toggleWorse} onMouseLeave={this.toggleWorse}>
                                    <input className="input-radio" type="radio" id="2" name="Q1" value="2" />
                                    <br/>
                                    <label htmlFor="2">2</label>
                                </td>
                                <td onMouseEnter={this.toggleNeutral} onMouseLeave={this.toggleNeutral}>
                                    <input className="input-radio" type="radio" id="3" name="Q1" value="3" />
                                    <br/>
                                    <label htmlFor="3">3</label>
                                </td>
                                <td className="td-last" onMouseEnter={this.toggleBetter} onMouseLeave={this.toggleBetter}>
                                    <input className="input-radio" type="radio" id="4" name="Q1" value="4" />
                                    <br/>
                                    <label htmlFor="4">4</label>
                                </td>
                                <td className="td-last" onMouseEnter={this.toggleBest} onMouseLeave={this.toggleBest}>
                                    <input className="input-radio" type="radio" id="5" name="Q1" value="5" />
                                    <br/>
                                    <label htmlFor="5">5</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                {this.state.showWorst && <span className="span-toggle" id="span-worst">terrible</span>}
                {this.state.showWorse && <span className="span-toggle" id="span-worse">bad</span>}
                {this.state.showNeutral && <span className="span-toggle" id="span-neutral">okay</span>}
                {this.state.showBetter && <span className="span-toggle" id="span-better">good</span>}
                {this.state.showBest && <span className="span-toggle" id="span-best">great</span>}
            </div >
        )
    }
}

export default connect()(Q1);