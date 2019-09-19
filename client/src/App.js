import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { Link } from 'react-router-dom'
// const Link = require("react-router-dom").Link;
// const Route = require("react-router-dom").Route;
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <MuiThemeProvider> */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
      {/* </MuiThemeProvider> */}
    </div>
    )
  }
}

export default App;
