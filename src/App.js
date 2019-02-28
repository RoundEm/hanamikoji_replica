import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar className="AppBar">
          <header>Hanamikoji Card Game Replica</header>
        </AppBar>

        <div className="container">
          <div className="playArea1">Player 1 area</div>
          <div className="playerActions1">Player 1 actions</div>
          <div className="geishaCards">Geisha Cards</div>
          <div className="drawPile">D</div>
          <div className="playerActions2">Player 2 actions</div>
          <div className="playArea2">Player 2 area</div>
        </div>
      </div>
    );
  }
}

export default App;
