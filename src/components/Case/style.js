import styled from '@emotion/styled'

export const Touch = styled.div`
  width: 30%;
  display: block;
  background: rgba(255, 255, 255, 0.7);
  user-select: none;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 2rem 0;
  border-radius: 0.5rem;
  margin: 0.2rem;
  color: black;
  font-weight: bold;
  font-family: Lato, sans-serif;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  transform: translate(0, 0);
  transition: transform 200ms ease-in-out, background 200ms ease-in-out;
  &:hover {
    transform: translate(-1px, -1px);
  }
  &:active {
    color: white;
    background: linear-gradient(298deg, #da2c4d, #f8ab37);
    transform: translate(1px, 1px);
  }
`
