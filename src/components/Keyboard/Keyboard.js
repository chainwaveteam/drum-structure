import React from 'react'
import PropTypes from 'prop-types'

import { data } from '../../data'
import useKeyPress from '../../hooks/useKeyPress'
import Case from './Case'
import { TouchList } from './style'

const { letters } = data

function getTouch(l) {
  return letters.filter(({ letter }) => letter.toLowerCase() === l)[0]
}

export default function Keyboard({ onPressOn }) {
  function handlePress({ key }) {
    const keys = letters.map(({ letter }) => letter)
    if (keys.includes(key.toUpperCase())) {
      onPressOn(getTouch(key))
    }
  }

  useKeyPress(handlePress)

  return (
    <TouchList>
      {letters.map(letter => (
        <Case
          key={letter.letter}
          {...letter}
          onClick={() => onPressOn(letter)}
        />
      ))}
    </TouchList>
  )
}

Keyboard.propTypes = {
  onPressOn: PropTypes.func.isRequired
}
