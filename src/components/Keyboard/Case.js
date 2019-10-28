import React from 'react'
import PropTypes from 'prop-types'

import { Touch } from './style'

function Case({ letter, onClick }) {
  return (
    <Touch key={letter} onClick={onClick}>
      <span>{letter.toUpperCase()}</span>
    </Touch>
  )
}

Case.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Case
