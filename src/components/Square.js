import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'
import styled from 'styled-components'

const SquareButton = styled.button`
background-color: pink;
border: 2px solid gray;
height: 50px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`

export const Square = ({ value, index }) => {
  // useDispatch doesnt require any arguments and allows to triggers actions
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }))
  }

  return (
    <SquareButton
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} style={{ fontSize: '30px', color: 'white' }} />
    </SquareButton>
  )
}
