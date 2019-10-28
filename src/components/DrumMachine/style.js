import styled from '@emotion/styled'
import background from '../../assets/bg.jpg'

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 1rem;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${background}");
`

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  max-width: 100%;
  padding: 1rem;
`

export const TouchList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  justify-content: center;
`
