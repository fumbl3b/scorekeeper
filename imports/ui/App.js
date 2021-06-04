import React from 'react'

import TitleBar from './TitleBar'
import AddPlayer from './AddPlayer'
import PlayerList from './PlayerList'

export default class App extends React.Component {
  render() {
    const { title, players } = this.props
    return (
      <div>
        <TitleBar title={title} subtitle="Created by Harry Winkler" />
        <div className="wrapper">
          <PlayerList players={players} />
          <AddPlayer score={10} />
        </div>
      </div>
    )
  }
}