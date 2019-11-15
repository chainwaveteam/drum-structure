import React from 'react'
import { useAudio } from 'react-use'
import PropTypes from 'prop-types'

import Button from '../button/button'

// TODO : Colors duplicated

export default function Pad({ l, color, bank, active, play, animActive }) {
  const { letter, sources, labels } = l

  const [audio, state, controls] = useAudio({
    src: sources[bank],
    id: letter.toUpperCase(),
    className: `keyboard__pad__audio clip`,
    children: labels[bank].toUpperCase()
  })

  if (active) {
    if (!state.paused) {
      controls.seek(0)
    }
    controls.play()
  }

  return (
    <div key={letter} id={letter} className="keyboard__pad drum-pad">
      <Button
        type="square"
        name={letter}
        onClick={play}
        active={animActive}
        color={color}
      >
        {audio}
      </Button>
    </div>
  )
}

Pad.propTypes = {
  l: PropTypes.shape({
    letter: PropTypes.string,
    sources: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  active: PropTypes.bool.isRequired,
  animActive: PropTypes.bool.isRequired,
  bank: PropTypes.oneOf([0, 1]).isRequired,
  color: PropTypes.oneOf([
    'light-red',
    'light-green',
    'yellow',
    'blue',
    'purple',
    'light-blue',
    'pink',
    'light-purple',
    'orange'
  ]).isRequired,
  play: PropTypes.func.isRequired
}
