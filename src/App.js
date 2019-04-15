import React, { Component } from 'react'
// import Card from './Components/Card'
import Header from './Components/Header'
import Deck from './Components/Deck'
import DeckList from './Components/DeckList'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Deck />
        <DeckList />
      </div>
    )
  }
}

export default App
