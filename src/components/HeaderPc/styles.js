import styled from 'styled-components'

export const HeaderContainers = styled.header`
  height: 5rem;
  background: #000;
`
export const FirstHeaderContainer = styled.div`
  display: grid;
  margin: 0 5rem;
  grid-template-columns: 5rem 10rem 1fr 5rem;
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
  text-align: center;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: .9rem;
  border: none;
`

export const Name = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #fff; 
  display: flex;
  justify-content: center;
  align-items: center;
`