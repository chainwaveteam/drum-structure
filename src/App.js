import React from 'react'
import { Helmet } from 'react-helmet'

import DrumMachine from './DrumMachine'

// Tests with freeCodeCamp
const isDev = process.env.NODE_ENV !== 'production'
const fccCdn = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'

function App() {
  return (
    <>
      {isDev && (
        <Helmet>
          <script type="text/javascript" src={fccCdn} />
        </Helmet>
      )}
      <DrumMachine />
    </>
  )
}

export default App
