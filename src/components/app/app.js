import React, { useState, useEffect } from 'react'
import 'normalize.css'

import './app.scss'

import Keyboard from '../keyboard/keyboard'
import Player from '../player'
import Checkbox from '../checkbox/checkbox'

// TODO : There are too many "useState"
// TODO : Power.onClick() make 2 rendering



function App() {
  const initialScreen = 'The Drum Machine'
  const INIT = 'INIT'
  const [display, setDisplay] = useState(initialScreen)
  const [src, setSrc] = useState(INIT)
  const [bank, setBank] = useState(0)
  const [isPower, setPower] = useState(true)

  const play = touch => {
    const key = touch.labels[bank]
    const url = touch.sources[bank]
    if (src && url !== src) {
      setDisplay(isPower ? key.toUpperCase() : initialScreen)
      setSrc(url)
      setTimeout(() => setSrc(INIT), 10)
    }
  }

  // Init on on/off
  useEffect(() => {
    setDisplay(initialScreen)
    setSrc(INIT)
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
            <Keyboard onPressOn={play} isOn={isPower} />
            <Player url={src} volume={isPower ? 1 : 0} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
