import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Flex, Screen, FlexCol } from './style'
import Checkbox from '../Checkbox/Checkbox'

export default function Dashboard({ display, handleRun, handleBank }) {
  return (
    <Wrapper>
      <Flex>
        <FlexCol>
          <h3 style={{ margin: '1rem 0 0.5rem', textAlign: 'left' }}>Drum Machine</h3>
          <Screen>{display}</Screen>
        </FlexCol>
        <div>
          <Checkbox label="On/off" onToggle={handleRun} checked />
          <Checkbox label="Bank" onToggle={handleBank} />
        </div>
      </Flex>
    </Wrapper>
  )
}

Dashboard.propTypes = {
  display: PropTypes.string.isRequired,
  handleRun: PropTypes.func.isRequired,
  handleBank: PropTypes.func.isRequired
}
