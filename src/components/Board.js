import React from 'react'
import { Square } from 'components/Square'

export const Board = () => {
  const squares = []

  return (
    <section className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </section>
  )
}
