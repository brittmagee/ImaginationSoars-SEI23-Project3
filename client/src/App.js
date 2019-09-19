import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import './App.css';
// import { Link } from 'react-router-dom'
// const Link = require("react-router-dom").Link;
// const Route = require("react-router-dom").Route;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
    </div>

    )
  }
}

export default App;
