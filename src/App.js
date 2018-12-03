import React, { Component } from 'react';
import Countdown from './Countdown.js';
import logo from './logo.svg';
import github from './github.png';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://images.all-free-download.com/images/graphiclarge/red_merry_christmas_logo_creative_vector_575021.jpg'/>
          <h2 className="reba-title">Reba's Christmas Countdown</h2>
        </div>

        <h3 className="title">Christmas is coming, <span>the goose <br></br>is getting obese</span>:</h3>
        <Countdown date={`${year}-12-25T00:00:00`} />
      </div>
    );
  }
}

export default App;
