import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Introduction, Conclusion, Home, Parcours, } from 'components/pages';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/introduction" exact component={Introduction}/>
          <Route path="/parcours" component={Parcours}/>
          <Route path="/conclusion" exact component={Conclusion}/>
        </div>
      </Router>
    );
  }
}

export default App;
