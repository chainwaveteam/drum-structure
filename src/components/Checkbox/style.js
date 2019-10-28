import styled from '@emotion/styled'

import { theme } from '../../theme'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    display: none;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    transition: 0.4s;
  }
  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: ${theme.transition};
  }

  input:checked + span {
    background: ${theme.colors.variant};
  }

  input:checked + span:before {
    transform: translateX(26px);
  }
`
