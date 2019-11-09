import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

// TODO : Here we can see the limit of BEM with circle modifiers
// TODO : Repeating props with button's parent like "color", "active", "onClick"

export default function Button({ name, onClick, type, color, active }) {
  const newClasses = [
    `button`,
    `button--type-${type}`,
    `button--color-${color}`,
    active ? `active` : ``
  ].join(' ')
  return (
    <button type="button" className={newClasses} onClick={onClick}>
      <span className="button__text">{name}</span>
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['square', 'circle']).isRequired,
  color: PropTypes.oneOf([
    'red',
    'green',
    'light-red',
    'light-green',
    'yellow',
    'blue',
    'purple',
    'light-blue',
    'pink',
    'light-purple',
    'orange'
  ]).isRequired,
  active: PropTypes.bool
}

Button.defaultProps = {
  name: '',
  active: false
}
