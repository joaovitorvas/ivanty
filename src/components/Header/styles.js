import styled from 'styled-components'

export const HeaderContainers = styled.header`
  height: 10rem;
  background: #000;

`
export const FirstHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
`

export const SecondHeaderContainer = styled.div`
  margin: 1rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const NavigateButton = styled.button`
  height: 2rem;
  width: 90%; 
  margin: 0 auto;
  background: #7b87c2;
  border-radius: 3rem;
`