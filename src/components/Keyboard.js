import React, { useState, useEffect, useContext } from 'react'

import PropTypes from 'prop-types'

import useKeyPress from '../hooks/useKeyPress'

import './keyboard.scss'
import Pad from './pad'
import { data } from '../data'
import { context } from '../context'

// TODO : There are too many "useState"
// TODO : IsPower don't work
// TODO : Repetition of colors array here and in propTypes + sass...
// TODO : I can play with the keyboard with Power Of

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
  letters.filter(({ letter }) => letter === l.toUpperCase())[0]

function Keyboard({ toggleDisplay }) {
  const { power, bank } = useContext(context)
  const [letterActive, setLetterActive] = useState('')
  const [animActive, setAnimActive] = useState('')

  const play = touch => {
    toggleDisplay(touch.labels[bank].toUpperCase())
    setLetterActive(touch.letter)
    setAnimActive(touch.letter)
    setTimeout(() => setLetterActive(''), 1)
    setTimeout(() => setAnimActive(''), 200)
  }

  function handlePress({ key }) {
    const keys = letters.map(({ letter }) => letter)
    if (keys.includes(key.toUpperCase())) {
      play(getTouch(key))
    }
  }

  useKeyPress(handlePress)

  // Init on on/off
  useEffect(() => {
    toggleDisplay(null)
  }, [power])

  return (
    <div className="keyboard">
      {letters.map((l, i) => (
        <Pad
          key={l.letter}
          l={l}
          color={colors[i]}
          active={l.letter === letterActive}
          animActive={l.letter === animActive}
          bank={bank ? 1 : 0}
          play={() => play(l)}
        />
      ))}
    </div>
  )
}

Keyboard.propTypes = {
  toggleDisplay: PropTypes.func.isRequired
}

export default Keyboard
