import React, { Component } from 'react'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import GeishaCard from './GeishaCard'
import componentData from './gameComponents.json'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameComponents: [],
      itemCards: [] 
    }
  }
  componentDidMount() {
    this.setState({
      gameComponents: componentData.geisha_cards,
      itemCards: componentData.item_cards
    })
  }
  componentDidUpdate() {
    console.log('CDU state: ', this.state)
  }
  render() {
    console.log('comp data: ', this.state.componentData)
    return (
      <div>
        <div className="top-header">
          <header>Hanamikoji Card Game Replica</header>
        </div>

        <div className="grid-container">

          <div className="player-1-hand play-area">
            Play Area/Hand
          </div>

          <div className="player-1-actions play-area">
            Player 1 actions
          </div>

          <div className="player-1-items play-area">
            Player 1 Item Cards
          </div>

          <div className="geisha-cards flex-container">
            {this.state.gameComponents.map(geisha => (
              <GeishaCard 
                color={geisha.color}
                charmPoints={geisha.charm_points}
                vpStatus={geisha.victory_point_status}
              />
            ))}
          </div>

          <div className="draw-pile flex-container">
            <div>Draw</div>
          </div>

          <div className="player-2-hand play-area">
            Play Area/Hand
          </div>

          <div className="player-2-actions play-area">
            Player 2 actions
          </div>

          <div className="player-2-items play-area">
            Player 2 Item Cards
          </div>

        </div>
      </div>
    );
  }
}

export default App;
