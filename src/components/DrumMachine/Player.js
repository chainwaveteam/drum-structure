import React from 'react'
import { Howl } from 'howler'
import PropTypes from 'prop-types'

import { data } from '../../data'

export default function Player({ url, volume }) {
  const sounds = data.audios.map(src => {
    const sound = new Howl({ src, volume })
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
