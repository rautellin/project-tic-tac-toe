import React from 'react'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  const handleClick = () => {
    // TODO
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
