import React from 'react'
import { Howl } from 'howler'
import PropTypes from 'prop-types'

import { data } from '../data'

// TODO : Add into pad
// TODO : Use native html5 audio tag

export default function Player({ url }) {
  const sounds = data.audios.map(src => {
    const sound = new Howl({ src })
    return { src, sound }
  })

  // Play
  sounds.forEach(({ src, sound }) => {
    if (src === url) sound.play()
  })

  return <></>
}

Player.propTypes = {
  url: PropTypes.string.isRequired
}
