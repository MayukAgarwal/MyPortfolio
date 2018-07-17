import React, { Component } from 'react';
import './css/portfolio.css';
import './css/materialize.min.css'
import BusinessCard from './components/BusinessCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BusinessCard />
      </div>
    );
  }
}

export default App;
