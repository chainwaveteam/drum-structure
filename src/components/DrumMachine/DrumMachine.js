import React from 'react'

import { data } from '../../data'
import { Background, Wrapper, TouchList } from './style'
import Case from '../Case/Case'

const { letters, audios } = data

// const getAudio = name => {
//   const regex = new RegExp(name, 'g')
//   return audios.filter(src => src.match(regex))[0]
// }

function play(letter) {
  console.log({ letter })
}

function DrumMachine() {
  return (
    <Background>
      <Wrapper id="drum-machine">
        <TouchList>
          {letters.map(letter => (
            <Case
              key={letter.letter}
              {...letter}
              onClick={() => play(letter)}
            />
          ))}
        </TouchList>
      </Wrapper>
    </Background>
  )
}

export default DrumMachine
