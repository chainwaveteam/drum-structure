import styled from '@emotion/styled'

export const theme = {
  colors: {
    variant: 'linear-gradient(298deg, #da2c4d, #f8ab37)'
  },
  card: {
    bg: 'rgba(255, 255, 255, 0.7)',
    radius: '0.5rem',
    shadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    margin: '0.2rem',
    color: 'black'
  },
  transition: 'all 200ms ease-in-out'
}

const { card } = theme

export const Card = styled.div`
  background: ${card.bg};
  border-radius: ${card.radius};
  box-shadow: ${card.shadow};
  margin: ${card.margin};
  color: ${card.color};
  user-select: none;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.6rem;
`
