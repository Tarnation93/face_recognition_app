import React, { Component } from 'react';
import Navigation from "./Components/Navigation.js"
import './App.css';
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
      </div>
    );
  }
}

export default App;
