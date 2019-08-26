import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';

class Q1 extends Component {

//With more time, I'd look into moving the 45 below lines into App and passing as props to keep the code dry on each Question Page.
//Comments for Q1 are applicable for Q2/Q3.

    state = {
        showWorst: false,
        showWorse: false,
        showNeutral: false,
        showBetter: false,
        showBest: false, //Used for conditional rendering of the description.
        selection: {
            selectedValueScore: 0,
            selectedValueDescription: ''
        } //Collecting a score and description for Redux for each question.
    }

    toggleWorst = () => {
        this.setState({
            showWorst: !this.state.showWorst
        })
    }  //Score of 1

    toggleWorse = () => {
        this.setState({
            showWorse: !this.state.showWorse
        })
    } //Score of 2

    toggleNeutral = () => {
        this.setState({
            showNeutral: !this.state.showNeutral
        })
    } //Score of 3

    toggleBetter = () => {
        this.setState({
            showBetter: !this.state.showBetter
        })
    } //Score of 4

    toggleBest = () => {
        this.setState({
            showBest: !this.state.showBest
        })
    } //Score of 5

    handleInputClick = (number, status) => {
        this.setState({
            selection: {
                selectedValueScore: number,
                selectedValueDescription: status
            }
        })
    } //When a user selects a number, the local state grabs the number value and description.

    handleNextClick = () => {
        this.props.dispatch({ type: 'Q1', payload: this.state.selection }) //Clicking Next sends this to Redux.
        this.props.history.push('/Q2') //Move to the next route.
    }

    render() {
        return (
            <div className="div-Q1main">
                <div className="div-question">
                    <h5><b>How are you feeling today?</b></h5>
                </div>
                <div className="div-inputs">
                    <table>
                        <tbody>
                            <tr>
                                <td className="td-first" onMouseEnter={this.toggleWorst} onMouseLeave={this.toggleWorst}>
                                    <input className="input-radio" type="radio" id="1" name="Q1" value="1"
                                        onClick={() => this.handleInputClick(1, `I'm feeling CRUDdy.`)} />
                                        {/* Sets the state to a value of 1 with its description. */}
                                    <br />
                                    <label htmlFor="1">1</label>
                                </td>
                                <td className="td-first" onMouseEnter={this.toggleWorse} onMouseLeave={this.toggleWorse}>
                                    <input className="input-radio" type="radio" id="2" name="Q1" value="2"
                                        onClick={() => this.handleInputClick(2, `I'm feeling bad.`)} />
                                    {/* Sets the state to a value of 2 with its description. */}
                                    <br />
                                    <label htmlFor="2">2</label>
                                </td>
                                <td onMouseEnter={this.toggleNeutral} onMouseLeave={this.toggleNeutral}>
                                    <input className="input-radio" type="radio" id="3" name="Q1" value="3"
                                        onClick={() => this.handleInputClick(3, `I'm feeling okay.`)} />
                                    {/* Sets the state to a value of 3 with its description. */}
                                    <br />
                                    <label htmlFor="3">3</label>
                                </td>
                                <td className="td-last" onMouseEnter={this.toggleBetter} onMouseLeave={this.toggleBetter}>
                                    <input className="input-radio" type="radio" id="4" name="Q1" value="4"
                                        onClick={() => this.handleInputClick(4, `I'm feeling good.`)} />
                                    {/* Sets the state to a value of 4 with its description. */}
                                    <br />
                                    <label htmlFor="4">4</label>
                                </td>
                                <td className="td-last" onMouseEnter={this.toggleBest} onMouseLeave={this.toggleBest}>
                                    <input className="input-radio" type="radio" id="5" name="Q1" value="5"
                                        onClick={() => this.handleInputClick(5, `I'm feeling great!`)} />
                                    {/* Sets the state to a value of 5 with its description. */}
                                    <br />
                                    <label htmlFor="5">5</label>
                                </td>
                            </tr>
                            <tr className="tr-fixed">
                                <td colSpan="5">
                                    <br />
                                    {this.state.showWorst && <span className="span-toggle span-worst">CRUDdy</span>}
                                    {this.state.showWorse && <span className="span-toggle span-worse">bad</span>}
                                    {this.state.showNeutral && <span className="span-toggle span-neutral">okay</span>}
                                    {this.state.showBetter && <span className="span-toggle span-better">good</span>}
                                    {this.state.showBest && <span className="span-toggle span-best">great</span>}
                                    {/* Conditional rendering to show the user a descritpion of their selection. */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <span className="span-selectedValueDescription">{this.state.selection.selectedValueDescription}</span>
                {/* Show the user their chosen description. */}
                <br/><br/>
                {this.state.selection.selectedValueDescription && <p><span>
                    <Button onClick={this.handleNextClick} variant="outlined" color="primary" type="submit">
                        Next<NavigateNext/></Button>
                </span></p>} {/* Shows the Next button only if a user has made a selection. */}
            </div>
        )
    }
}

export default connect()(Q1);