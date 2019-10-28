import React from 'react'
import PropTypes from 'prop-types'

import { Touch, Card } from './style'

function Case({ letter, onClick, disabled, active }) {
  const handleClick = () => {
    if (!disabled) onClick()
  }
  return (
    <Touch key={letter} onClick={handleClick}>
      <Card disabled={disabled} active={active && !disabled}>
        <span>{letter.toUpperCase()}</span>
      </Card>
    </Touch>
  )
}

Case.propTypes = {
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool
}

Case.defaultProps = {
  disabled: false,
  active: false
}

export default Case
