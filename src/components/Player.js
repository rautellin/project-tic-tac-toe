import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Player = ({ value }) => {

  return (
    <>
      {value === 'x' && <FontAwesomeIcon icon="times" />}
      {value === 'o' && <FontAwesomeIcon icon="circle" />}
    </>
  )
}