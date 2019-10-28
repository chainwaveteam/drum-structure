import styled from '@emotion/styled'

import { Card, theme } from '../../theme'

export const Wrapper = styled(Card)`
  padding: 1rem;
  margin: ${theme.card.margin};
`
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Screen = styled.div`
  padding: 1rem;
  width: 175px;
  max-width: 100%;
  text-align: center;
  border: 3px solid white;
  background: black;
  font-weight: bold;
  margin: 0.5rem;
  color: ${p => (p.isOn ? 'white' : 'black')};
  font-size: 1.2rem;
  line-height: 1.2rem;
`
