import React from 'react'
import { Player } from 'components/Player'
import styled from 'styled-components'

const SquareButton = styled.button`
background-color: pink;
border: 2px solid gray;
height: 50px;
cursor: pointer;
`

export const Square = ({ value, index }) => {
  const handleClick = () => {
    // TODO
  }

  return (
    <SquareButton
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </SquareButton>
  )
}
