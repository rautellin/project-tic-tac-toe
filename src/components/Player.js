import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Player = ({ value, style }) => {

  return (
    <>
      {value === 'x' && <FontAwesomeIcon icon="times" style={style} />}
      {value === 'o' && <FontAwesomeIcon icon="circle" style={style} />}
    </>
  )
}