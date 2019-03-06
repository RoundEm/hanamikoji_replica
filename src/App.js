import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar className="top-header">
          <header>Hanamikoji Card Game Replica</header>
        </AppBar>

        <div className="grid-container">

          <div className="playerHand1">
            Play Area/Hand
          </div>

          <div className="playerActions1">
            Player 1 actions
          </div>

          <div className="playArea1">
            Player 1 Item Cards
          </div>

          <div className="geishaCards flex-container">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
          </div>
          <div className="drawPile flex-container">
            <div>Draw</div>
          </div>

          <div className="playerHand2">
            Play Area/Hand
          </div>

          <div className="playerActions2">
            Player 2 actions
          </div>

          <div className="playArea2">
            Player 2 Item Cards
          </div>

        </div>
      </div>
    );
  }
}

export default App;
