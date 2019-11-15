import React, { useState } from 'react'
import 'normalize.css'

import './app.scss'
import Checkbox from '../checkbox/checkbox'

import { ContextConsumer } from '../../context'
import Keyboard from '../keyboard/Keyboard'

function App() {
  const initialScreen = 'The Drum Machine'
  const [display, setDisplay] = useState(initialScreen)
  return (
    <div className="app">
      <div className="app__border">
        <div id="drum-machine" className="app__wrapper">
          <div className="app__header">
            <ContextConsumer>
              {({ bank, toggleBank, power, togglePower }) => (
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
              )}
            </ContextConsumer>
            <div id="display" className="app__title">
              {display}
            </div>
          </div>
          <div className="app__body">
            <Keyboard toggleDisplay={val => setDisplay(val || initialScreen)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
