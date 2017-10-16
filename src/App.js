import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Introduction, Conclusion, Home, } from 'components/pages';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact><Home/></Route>
          <Route path="/introduction" exact><Introduction/></Route>
          <Route path="/conclusion" exact><Introduction/></Route>
        </div>
      </Router>
    );
  }
}

export default App;
