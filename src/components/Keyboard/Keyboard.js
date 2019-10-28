import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { data } from '../../data'
import useKeyPress from '../../hooks/useKeyPress'
import Case from './Case'
import { TouchList } from './style'

const { letters } = data

const getTouch = l =>
  letters.filter(({ letter }) => letter.toLowerCase() === l)[0]

export default function Keyboard({ onPressOn, isOn }) {
  const [letterActive, setLetterActive] = useState('')

  function handlePress({ key }) {
    const keys = letters.map(({ letter }) => letter)
    if (keys.includes(key.toUpperCase())) {
      onPressOn(getTouch(key))
      setLetterActive(key.toUpperCase())
      setTimeout(() => setLetterActive(''), 200)
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
          disabled={!isOn}
          active={letter.letter === letterActive}
        />
      ))}
    </TouchList>
  )
}

Keyboard.propTypes = {
  onPressOn: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired
}
