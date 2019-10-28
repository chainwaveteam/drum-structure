import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Switch, Label } from './style'

export default function Checkbox({ label, onToggle, checked }) {
  const [value, setValue] = useState(checked)
  function handleChange() {
    const newVal = !value
    setValue(newVal)
    onToggle(newVal)
  }
  return (
    <Label>
      {label}
      <Switch>
        <input
          type="checkbox"
          checked={value}
          onChange={() => handleChange()}
        />
        <span />
      </Switch>
    </Label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

Checkbox.defaultProps = {
  checked: false
}
