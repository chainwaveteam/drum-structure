import React from 'react'

// import { data } from '../../data'
import { Background, Wrapper } from './style'
import Keyboard from '../Keyboard/Keyboard'

// const { letters, audios } = data

// const getAudio = name => {
//   const regex = new RegExp(name, 'g')
//   return audios.filter(src => src.match(regex))[0]
// }

function DrumMachine() {
  function play(touch) {
    console.log(touch)
  }

  return (
    <Background>
      <Wrapper id="drum-machine">
        <Keyboard onPressOn={touch => play(touch)} />
      </Wrapper>
    </Background>
  )
}

export default DrumMachine
