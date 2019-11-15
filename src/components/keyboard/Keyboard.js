import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import './keyboard.scss'
import Pad from './pad'
import { data } from '../../data'
import { context } from '../../context'

const { letters } = data

function Keyboard({ toggleDisplay }) {
  const { bank } = useContext(context)

  return (
    <div className="keyboard">
      {letters.map(l => (
        <Pad
          key={l.letter}
          l={l}
          toggleScreen={() => toggleDisplay(l.labels[bank].toUpperCase())}
        />
      ))}
    </div>
  )
}

Keyboard.propTypes = {
  toggleDisplay: PropTypes.func.isRequired
}

export default Keyboard
