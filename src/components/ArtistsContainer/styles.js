import styled from 'styled-components'

export const Container = styled.div`
  background-color: #7B87C2;
  height: 10rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`

export const Artist = styled.div`
`

export const ArtistPicture = styled.img`
  width: 80%;
  margin: 1rem auto;
  border-radius: 5rem;
  text-align: center;
`

export const ArtistName = styled.span`
  color: #FFF;
  margin: 0 auto;
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`