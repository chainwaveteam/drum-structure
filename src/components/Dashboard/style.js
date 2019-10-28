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
export const FlexCol = styled(Flex)`
  flex-direction: column;
`
export const Screen = styled.div`
  padding: 1rem;
  width: calc(200px - 2rem - 6px);
  max-width: calc(100% - 2rem - 6px);
  text-align: center;
  border: 3px solid white;
  background: black;
  font-weight: bold;
  margin: auto auto 0 0;
  color: white;
  font-size: 1.2rem;
  line-height: 1.2rem;
`
