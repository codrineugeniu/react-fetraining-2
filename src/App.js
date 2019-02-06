import React, { Component } from 'react';

import Title from './Title';
import DateNow from './DateNow';
import CounterWithState from './CounterWithState';
import ListDemo from './ListDemo';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title />
        <ListDemo />
      </div>
    );
  }
}

export default App;
