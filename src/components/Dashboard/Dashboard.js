import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Flex, Screen } from './style'
import Checkbox from '../Checkbox/Checkbox'

const Dashboard = ({ display, handleRun, handleBank, isOn }) => (
  <Wrapper>
    <Flex>
      <Checkbox label="On/off" onToggle={handleRun} checked />
      <Screen id="display" isOn={isOn}>
        {display.toUpperCase()}
      </Screen>
      <Checkbox label="Bank" onToggle={handleBank} />
    </Flex>
  </Wrapper>
)

Dashboard.propTypes = {
  display: PropTypes.string.isRequired,
  handleRun: PropTypes.func.isRequired,
  handleBank: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired
}

export default Dashboard
