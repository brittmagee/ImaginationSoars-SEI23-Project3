import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/Books.js'
import './App.css';
import ShoppingCart from './components/ShoppingCart.js'
import GenreDisplay from './components/GenreDisplay.js'
import Landing from './components/Landing.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/books" component={Books}/>
            <Route exact path="/shoppingCart" component={ShoppingCart}/>
            <Route exact path="/genre" component={GenreDisplay}/>
          </Switch>
        </Router>
    </div>

    )
  }
}

export default App;
