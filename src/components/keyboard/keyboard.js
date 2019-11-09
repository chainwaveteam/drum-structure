import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { data } from '../../data'
import useKeyPress from '../../hooks/useKeyPress'
import './keyboard.scss'
import Button from '../button/button'

// TODO : Repetition of colors array here and in propTypes + sass...
// TODO : Pad touch effect don't work onClick
// TODO : Bank[1] sound in bank[0] onKeyPress
// TODO : I can play with the keyboard with Power Off

const { letters } = data

const colors = [
  'light-red',
  'light-green',
  'yellow',
  'blue',
  'purple',
  'light-blue',
  'pink',
  'light-purple',
  'orange'
]

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

  function handleClick(letter) {
    if (isOn) {
      onPressOn(letter)
      setLetterActive(letter.key)
      setTimeout(() => setLetterActive(''), 200)
    }
  }

  useKeyPress(handlePress)

  return (
    <div className="keyboard">
      {letters.map((letter, i) => (
        <div key={letter.letter} className="keyboard__pad">
          <Button
            type="square"
            name={letter.letter}
            onClick={() => handleClick(letter)}
            active={letter.letter === letterActive}
            color={colors[i]}
          >
            {letter.letter}
          </Button>
        </div>
      ))}
    </div>
  )
}

Keyboard.propTypes = {
  onPressOn: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired
}
