import React, { Component } from 'react';
import {TweenLite, TweenMax, Elastic, Back } from 'gsap'
import './css/portfolio.css';
import './css/materialize.min.css'
import './js/animations'
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
