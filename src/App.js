import React, { Component } from 'react'
import './App.css'
import GeishaCard from './GeishaCard'
import ActionMarker from './ActionMarker'
import componentData from './gameComponents.json'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameComponents: [],
      itemCards: [],
      actionMarkers: [] 
    }
  }
  componentDidMount() {
    this.setState({
      gameComponents: componentData.geisha_cards,
      itemCards: componentData.item_cards,
      actionMarkers: componentData.action_markers
    })
  }
  // componentDidUpdate() {
  //   console.log('CDU state: ', this.state)
  // }
  render() {
    console.log('state: ', this.state)
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
            {this.state.actionMarkers.map(action => (
              <ActionMarker 
                key={action.name}
                name={action.name}
              />
            ))}
          </div>

          <div className="player-1-items play-area">
            Player 1 Item Cards
          </div>

          <div className="geisha-cards flex-container">
            {this.state.gameComponents.map(geisha => (
              <GeishaCard 
                key={geisha.id}
                color={geisha.color}
                charmPoints={geisha.charm_points}
                vpStatus={geisha.victory_point_status}
              />
            ))}
          </div>

          <div className="draw-pile flex-container">
            Draw
          </div>

          <div className="player-2-hand play-area">
            Play Area/Hand
          </div>

          <div className="player-2-actions play-area">
            {this.state.actionMarkers.map(action => (
              <ActionMarker 
                key={action.name}
                name={action.name}
              />
            ))}
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
