import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Clock />
      </div>
    );
  }
}
export default App