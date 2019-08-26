import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';

//Reference Q1 for comments.

class Q2 extends Component {

    state = {
        showWorst: false,
        showWorse: false,
        showNeutral: false,
        showBetter: false,
        showBest: false,
        selection: {
            selectedValueScore: 0,
            selectedValueDescription: ''
        }
    }

    toggleWorst = () => {
        this.setState({
            showWorst: !this.state.showWorst
        })
    }

    toggleWorse = () => {
        this.setState({
            showWorse: !this.state.showWorse
        })
    }

    toggleNeutral = () => {
        this.setState({
            showNeutral: !this.state.showNeutral
        })
    }

    toggleBetter = () => {
        this.setState({
            showBetter: !this.state.showBetter
        })
    }

    toggleBest = () => {
        this.setState({
            showBest: !this.state.showBest
        })
    }

    handleInputClick = (number, status) => {
        this.setState({
            selection: {
                selectedValueScore: number,
                selectedValueDescription: status
            }
        })
    }

    handleNextClick = () => {
        this.props.dispatch({ type: 'Q2', payload: this.state.selection })
        this.props.history.push('/Q3')
    }

    render() {
        return (
            <div className="div-Q2main">
                <div className="div-question">
                    <h5><b>How well are you understanding the content?</b></h5>
                </div>
                <div className="div-inputs">
                    <table>
                        <tbody>
                            <tr>
                                <td className="td-first" onMouseEnter={this.toggleWorst} onMouseLeave={this.toggleWorst}>
                                    <input className="input-radio" type="radio" id="1" name="Q1" value="1"
                                        onClick={() => this.handleInputClick(1, `I don't understand any of this.`)} />
                                    <br />
                                    <label htmlFor="1">1</label>
                                </td>
                                <td className="td-first" onMouseEnter={this.toggleWorse} onMouseLeave={this.toggleWorse}>
                                    <input className="input-radio" type="radio" id="2" name="Q1" value="2"
                                        onClick={() => this.handleInputClick(2, `I don't understand most of this.`)} />
                                    <br />
                                    <label htmlFor="2">2</label>
                                </td>
                                <td onMouseEnter={this.toggleNeutral} onMouseLeave={this.toggleNeutral}>
                                    <input className="input-radio" type="radio" id="3" name="Q1" value="3"
                                        onClick={() => this.handleInputClick(3, `I understand some of this.`)} />
                                    <br />
                                    <label htmlFor="3">3</label>
                                </td>
                                <td className="td-last" onMouseEnter={this.toggleBetter} onMouseLeave={this.toggleBetter}>
                                    <input className="input-radio" type="radio" id="4" name="Q1" value="4"
                                        onClick={() => this.handleInputClick(4, `I understand most of this.`)} />
                                    <br />
                                    <label htmlFor="4">4</label>
                                </td>
                                <td className="td-last" onMouseEnter={this.toggleBest} onMouseLeave={this.toggleBest}>
                                    <input className="input-radio" type="radio" id="5" name="Q1" value="5"
                                        onClick={() => this.handleInputClick(5, `I understand all of this!`)} />
                                    <br />
                                    <label htmlFor="5">5</label>
                                </td>
                            </tr>
                            <tr className="tr-fixed">
                                <td colSpan="5">
                                    <br />
                                    {this.state.showWorst && <span className="span-toggle span-worst">totally lost</span>}
                                    {this.state.showWorse && <span className="span-toggle span-worse">not very well</span>}
                                    {this.state.showNeutral && <span className="span-toggle span-neutral">understanding some</span>}
                                    {this.state.showBetter && <span className="span-toggle span-better">understanding most</span>}
                                    {this.state.showBest && <span className="span-toggle span-best">understanding all</span>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <span className="span-selectedValueDescription">{this.state.selection.selectedValueDescription}</span>
                <br /><br />
                {this.state.selection.selectedValueDescription && <p><span>
                    <Button onClick={this.handleNextClick} variant="outlined" color="primary" type="submit">
                        Next <NavigateNext />
                </Button>
                </span></p>}
            </div>
        )
    }
}

export default connect()(Q2);