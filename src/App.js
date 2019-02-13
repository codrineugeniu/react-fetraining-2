import React, { Component } from 'react';

import Title from './Title';
import DateNow from './DateNow';
import CounterWithState from './CounterWithState';
import FizzBuzz from './FizzBuzz';
import ListDemo from './ListDemo';
import { Colors } from './Colors';
import './App.css';

class App extends Component {
  state = {
    selectedColor: {
      hexCode: '#607D8B',
      label: 'Blue Grey'
    }
  }

  handleClick = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  render() {
    const { selectedColor } = this.state;
    return (
      <div className="App">
        <Title hexCode={selectedColor.hexCode} label={selectedColor.label} />
        <p>
          {
            selectedColor.hexCode === '#4CAF50' && <span>
              The color you selected is our color of the day! Enjoy 10% off.
              </span>
          }
        </p>
        <Colors onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
