import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Stats = () => {
  const dispatch = useDispatch()
  const winner = useSelector((store) => store.game.winner)
  const nextPlayer = useSelector((store) => store.game.player)

  const handleButtonPress = () => {
    dispatch(game.actions.restart())
  }

  if (winner) {
    return (
      <section className="stats">
        <p><Player value={winner} style={{ fontSize: '30px', color: 'pink' }} /> won!</p>
        <button type="button" onClick={handleButtonPress}>Start a new game</button>
      </section>
    )
  }

  return (
    <section className="stats">
      <p>Next player <Player value={nextPlayer} style={{ fontSize: '30px', color: 'pink' }} /></p>
      <button type="button" onClick={handleButtonPress}>Restart</button>
    </section>
  )
}
