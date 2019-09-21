import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/Books.js'
import Landing from './components/Landing.js'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/books" component={Books}/>
          </Switch>
        </Router>
    </div>

    )
  }
}

export default App;
