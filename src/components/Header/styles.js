import styled from 'styled-components'

export const HeaderContainers = styled.header`
  height: 16rem;
  background: #000;

  @media screen and (min-width: 600px) {
    height: 13rem;
}
`
export const FirstHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;

  @media screen and (min-width: 600px) {
    display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
}
`



export const NavigateButton = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  display: inline-block;
  margin-left: 1.5rem;
  margin-top: 2rem;
`
