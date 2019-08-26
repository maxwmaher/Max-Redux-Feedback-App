import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Q1 from '../Q1/Q1';
import Q2 from '../Q2/Q2';
import Q3 from '../Q3/Q3';
import Q4 from '../Q4/Q4';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  //color palette
  palette: {
    primary: {
      main: '#006eff'
    },
    secondary: {
      main: '#0044ff'
    }
  }
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">tell us how it's going</h1>
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
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect (mapStateToProps)(App);
