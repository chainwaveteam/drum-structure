import React, { useState } from 'react'

const context = React.createContext()
const { Provider, Consumer } = context

// eslint-disable-next-line react/prop-types
function ContextProvider({ children }) {
  const [bank, setBank] = useState(0)
  const [power, setPower] = useState(true)
  const toggleBank = () => setBank(bank === 0 ? 1 : 0)
  const togglePower = () => setPower(!power)

  return (
    <Provider value={{ bank, toggleBank, power, togglePower }}>
      {children}
    </Provider>
  )
}

export { ContextProvider, Consumer as ContextConsumer, context }
