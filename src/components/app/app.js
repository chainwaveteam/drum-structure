import React, { useState, useEffect } from 'react'
import 'normalize.css'

import './app.scss'
import '../keyboard.scss'
import Pad from '../pad'

import Checkbox from '../checkbox/checkbox'
import useKeyPress from '../../hooks/useKeyPress'
import { data } from '../../data'

// TODO : There are too many "useState"
// TODO : Power.onClick() make 2 rendering
// TODO : IsPower don't work
// TODO : Repetition of colors array here and in propTypes + sass...
// TODO : I can play with the keyboard with Power Off
// TODO : UseContext for Power & Bank ?

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

function App() {
  const initialScreen = 'The Drum Machine'
  const [display, setDisplay] = useState(initialScreen)
  const [bank, setBank] = useState(0)
  const [isPower, setPower] = useState(true)
  const [letterActive, setLetterActive] = useState('')
  const [animActive, setAnimActive] = useState('')

  const play = touch => {
    setDisplay(isPower ? touch.labels[bank].toUpperCase() : initialScreen)
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
    setDisplay(initialScreen)
  }, [isPower])

  return (
    <div className="app">
      <div className="app__border">
        <div id="drum-machine" className="app__wrapper">
          <div className="app__header">
            <div className="app__buttons">
              <Checkbox
                name="power"
                color="red"
                onToggle={() => setPower(!isPower)}
                checked={isPower}
              />
              <Checkbox
                name="bank"
                color="green"
                onToggle={() => setBank(!bank ? 1 : 0)}
                checked={Boolean(bank)}
              />
            </div>
            <div id="display" className="app__title">
              {display}
            </div>
          </div>
          <div className="app__body">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
