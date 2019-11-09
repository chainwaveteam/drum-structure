import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/button'
import './checkbox.scss'

export default function Checkbox({ name, onToggle, checked, color }) {
  return (
    <div className="checkbox">
      <Button onClick={onToggle} active={checked} color={color} type="circle" />
      <p className="checkbox__label">{name}</p>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  color: PropTypes.oneOf('red', 'green').isRequired
}

Checkbox.defaultProps = {
  checked: false
}
