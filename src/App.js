import React, { Component } from 'react';
import './css/portfolio.css';
import './css/materialize.min.css';
import './js/animations';
import Navbar from './components/Navbar';
import BusinessCard from './components/BusinessCard';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar/>
        <BusinessCard />
      </div>
    );
  }
}

export default App;
