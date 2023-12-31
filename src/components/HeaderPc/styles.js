import styled from 'styled-components'

export const HeaderContainers = styled.header`
  height: 5rem;
  background: #000;
  position: fixed;
  width: 100%;
  z-index: 1000;
`
export const FirstHeaderContainer = styled.div`
  display: grid;
  margin: 0 8.5rem;
  grid-template-columns: 40px 3.5fr 1fr 0.5fr;
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

export const LogoNameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  margin-top: 2rem;
`

export const LogoNameText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: #FFF;
  text-align: center;
  font-family: Playfair Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-top: 1.4rem; 
  margin-left: 2.5rem;
`

export const MenuPC = styled.div`
  margin-left: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
export const AMenuItem = styled.a`
  margin-top: 2.2rem;
`

export const IvantyAMenuItem = styled.a`
  margin-top: 1.7rem;
`
export const MenuItem = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const IvantyItem = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Playfair Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`