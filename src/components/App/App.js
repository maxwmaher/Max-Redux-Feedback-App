import React, { Component } from 'react';
import {connect} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './bootstrap.css';
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
})  //Material-UI color theming for buttons.

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
        <Route path='/' exact component={Q1}/>  {/*Question 1 - Feeling */}
        <Route path='/Q2' component={Q2} /> {/*Question 2 - Understanding */}
        <Route path='/Q3' component={Q3} /> {/*Question 3 - Support */}
        <Route path='/Q4' component={Q4} /> {/*Question 4 - Comments*/}
        <Route path='/Review' component={Review}/> {/*User Review*/}
        <Route path='/ThankYou' component={ThankYou}/> {/*Confirmation Page*/}
      </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default connect ()(App);
