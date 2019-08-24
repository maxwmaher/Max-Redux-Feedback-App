import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Q1 from '../Q1/Q1';
import Q2 from '../Q2/Q2';
import Q3 from '../Q3/Q3';
import Q4 from '../Q4/Q4';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tell us how we're doing</h1>
        </header>
        <br/>
        <Route path='/' exact component={Q1}/>
        <Route path='/Q2' component={Q2}/>
        <Route path='/Q3' component={Q3}/>
        <Route path='/Q4' component={Q4}/>
        <Route path='/Review' component={Review}/>
        <Route path='/ThankYou' component={ThankYou}/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect (mapStateToProps)(App);
