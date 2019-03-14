import React, { Component } from 'react'
import './App.css'
import GeishaCard from './GeishaCard'
import ActionMarker from './ActionMarker'
import DrawerMenu from './DrawerMenu'
import componentData from './gameComponents.json'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameComponents: [],
      itemCards: [],
      actionMarkers: [],
      drawerOpen: false
    }
  }
  componentDidMount() {
    this.setState({
      gameComponents: componentData.geisha_cards,
      itemCards: componentData.item_cards,
      actionMarkers: componentData.action_markers,
    })
  }
  // componentDidUpdate() {
  //   console.log('CDU state: ', this.state)
  // }
  handleDrawerOpen = () => {
    this.setState({
      drawerOpen: true
    })
  }
  handleDrawerClose = () => {
    console.log('closing')
    this.setState({
      drawerOpen: false
    })
  }
  render() {
    console.log('state: ', this.state)
    return (
      <React.Fragment>

        <div className="top-header">
          <MenuIcon 
            className="menu-icon" 
            onClick={this.handleDrawerOpen}
            fontSize="large"
          />
          <header>Hanamikoji Card Game Replica</header>
        </div>

        <Drawer
          children={
            <DrawerMenu closeDrawer={this.handleDrawerClose} 
          />}
          open={this.state.drawerOpen}
          anchor="right"
          className="menu-drawer"
          variant="persistent"
        />

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
      </React.Fragment>
    );
  }
}

export default App;
