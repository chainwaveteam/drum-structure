import styled from '@emotion/styled'
import background from '../../assets/bg.jpg'

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${background}");
  font-family: Lato, sans-serif;
  overflow: hidden;
`

export const Wrapper = styled.div`
  margin: auto;
  max-width: 100%;
`
