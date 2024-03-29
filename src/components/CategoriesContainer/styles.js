import styled from 'styled-components'

export const Container = styled.section`
  background-color: #122D42;
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 1500px) {
    padding: 1rem 5rem;
}
`

export const ArtContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`

export const Artist = styled.div`
`

export const ArtistPicture = styled.img`
  width: 80%;
  margin: 0 auto;
  border-radius: 5rem;
  text-align: center;
  display: block;
`

export const ArtistName = styled.span`
  color: #FFF;
  margin: 0.5rem auto;
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  display: block;
`

export const ArtistText = styled.h2`
  color: #FFF;
  font-family: Roboto;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`