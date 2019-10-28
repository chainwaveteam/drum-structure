import React, { useState, useEffect } from 'react'

import { Background, Wrapper } from './style'
import Keyboard from '../Keyboard/Keyboard'
import Dashboard from '../Dashboard/Dashboard'
import Player from './Player'

function DrumMachine() {
  const initialScreen = '- - - -'
  const INIT = 'INIT'
  const [display, setDisplay] = useState(initialScreen)
  const [src, setSrc] = useState(INIT)
  const [bank, setBank] = useState(0)
  const [isOn, setIsOn] = useState(true)

  const play = touch => {
    const key = touch.labels[bank]
    const url = touch.sources[bank]
    if (src && url !== src) {
      setDisplay(isOn ? key : initialScreen)
      setSrc(url)
      setTimeout(() => setSrc(INIT), 10)
    }
  }

  // Init on on/off
  useEffect(() => {
    setDisplay(initialScreen)
    setSrc(INIT)
  }, [isOn])

  return (
    <Background>
      <Wrapper id="drum-machine">
        <Dashboard
          display={display}
          handleBank={bool => setBank(bool ? 1 : 0)}
          handleRun={bool => setIsOn(bool)}
          isOn={isOn}
        />
        <Keyboard onPressOn={play} isOn={isOn} />
        <Player url={src} volume={isOn ? 1 : 0} />
      </Wrapper>
    </Background>
  )
}

export default DrumMachine
