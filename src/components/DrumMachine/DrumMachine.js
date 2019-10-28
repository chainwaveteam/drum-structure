import React, { useState } from 'react'

// import { data } from '../../data'
import { Background, Wrapper } from './style'
import Keyboard from '../Keyboard/Keyboard'
import Dashboard from '../Dashboard/Dashboard'

// const { letters, audios } = data

// const getAudio = name => {
//   const regex = new RegExp(name, 'g')
//   return audios.filter(src => src.match(regex))[0]
// }

function DrumMachine() {
  const initialScreen = '- - - -'
  const [display, setDisplay] = useState(initialScreen)
  const [bank, setBank] = useState(0)
  const [isOn, setIsOn] = useState(true)

  if (display !== initialScreen && !isOn) setDisplay(initialScreen)

  const play = touch => setDisplay(touch.labels[bank])

  return (
    <Background>
      <Wrapper id="drum-machine">
        <Dashboard
          display={display}
          handleBank={bool => setBank(bool ? 1 : 0)}
          handleRun={bool => setIsOn(bool)}
        />
        <Keyboard onPressOn={play} isOn={isOn} />
      </Wrapper>
    </Background>
  )
}

export default DrumMachine
