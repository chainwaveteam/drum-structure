import React, { useState, useContext, useEffect } from 'react'
import 'normalize.css'

import './app.scss'
import Checkbox from '../checkbox/checkbox'

import { context } from '../../context'
import Keyboard from '../keyboard/Keyboard'

function App() {
  const initialScreen = 'The Drum Machine'
  const [display, setDisplay] = useState(initialScreen)
  const { bank, toggleBank, power, togglePower } = useContext(context)

  useEffect(() => {
    if (display !== initialScreen) {
      setDisplay(initialScreen)
    }
  }, [power])

  return (
    <div className="app">
      <div className="app__border">
        <div id="drum-machine" className="app__wrapper">
          <div className="app__header">
            <div className="app__buttons">
              <Checkbox
                name="power"
                color="red"
                onToggle={togglePower}
                checked={power}
              />
              <Checkbox
                name="bank"
                color="green"
                onToggle={toggleBank}
                checked={Boolean(bank)}
              />
            </div>

            <div id="display" className="app__title">
              {power ? display : initialScreen}
            </div>
          </div>
          <div className="app__body">
            <Keyboard toggleDisplay={val => setDisplay(val)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
