import React from 'react'
import ReactDOM from 'react-dom'

import Script from './components/freeCodeCamp'
import App from './components/app/app'
import { ContextProvider } from './context'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ContextProvider>
    <Script />
    <App />
  </ContextProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
