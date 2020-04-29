import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'
import styled from 'styled-components'

const BoardContainer = styled.section`
display: grid;
grid-template-columns: repeat(3, 50px);
grid-gap: 5px;
`

export const Board = () => {
  // useSelector Hook to fetch from the store/state from any component 

  const squares = useSelector((store) => store.game.squares)

  return (
    <BoardContainer className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </BoardContainer>
  )
}
