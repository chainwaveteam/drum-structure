import React, { useContext, useState } from 'react'
import { useAudio } from 'react-use'
import PropTypes from 'prop-types'

import Button from '../button/button'
import useKeyPress from '../../hooks/useKeyPress'
import { context } from '../../context'

// TODO : Colors duplicated

export default function Pad({ l, color, toggleScreen }) {
  const { letter, sources, labels } = l
  const { bank, power } = useContext(context)
  const [active, setActive] = useState(false)

  const [audio, state, controls] = useAudio({
    src: power ? sources[bank] : '',
    id: letter.toUpperCase(),
    className: `keyboard__pad__audio clip`,
    children: labels[bank].toUpperCase()
  })

  const play = () => {
    controls.seek(0)
    controls.play()
    toggleScreen()
    setActive(true)
    setTimeout(() => setActive(false), 200)
  }

  useKeyPress(e => e.key === letter.toLowerCase() && play())

  return (
    <Button
      id={letter}
      type="square"
      name={letter}
      onClick={play}
      active={power ? active : false}
      color={l.color}
      className="drum-pad keyboard__pad"
    >
      {audio}
    </Button>
  )
}

Pad.propTypes = {
  l: PropTypes.shape({
    letter: PropTypes.string,
    sources: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  toggleScreen: PropTypes.func.isRequired
}
