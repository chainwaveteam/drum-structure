import styled from '@emotion/styled'

import { css } from '@emotion/core'
import { Card as CardBase, theme } from '../../theme'

export const TouchList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  max-width: 100%;
  justify-content: center;
`

export const Touch = styled.div`
  width: calc(100% / 3);
  display: block;
`

export const Card = styled(CardBase)`
  padding: 2rem 0;
  font-weight: bold;
  transform: translate(0, 0);
  transition: ${theme.transition};

  ${p =>
    p.disabled
      ? `
  cursor: not-allowed;
  `
      : `
      cursor: pointer;
  &:hover {
    transform: translate(-1px, -1px);
  }
  &:active {
    color: white;
    background: ${theme.colors.variant};
    transform: translate(1px, 1px);
  }
  `};

  ${p =>
    p.active &&
    `
    color: white;
    background: ${theme.colors.variant};
    transform: translate(1px, 1px);
  `}
`

// ${p => p.active && `${activeCSS};`}
