import React from 'react'
import FlipMove from 'react-flip-move'

import Player from './Player'

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (!this.props.players.length) {
      return (
        <div className="item">
          <p className="item__message">Please add a Player to get started !</p>
        </div>
      )
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />
      })
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}