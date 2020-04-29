import React from 'react'
import { Player } from 'components/Player'

export const Stats = () => {
  const winner = null
  const nextPlayer = 'x'

  const handleButtonPress = () => {
    //TODO
  }

  if (winner) {
    return (
      <section className="stats">
        <p><Player value={winner} /> won!</p>
        <button type="button" onClick={handleButtonPress}>Start a new game</button>
      </section>
    )
  }

  return (
    <section className="stats">
      <p>Next player <Player value={nextPlayer} /></p>
      <button type="button" onClick={handleButtonPress}>Restart</button>
    </section>
  )
}
