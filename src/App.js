import React, { Component } from 'react';
import Clock from "./components/Clock";
import './style/clock.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Clock />
      </div>
    );
  }
}

export default App;
