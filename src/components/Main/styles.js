import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;

`

export const ListCategories = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem; 
}

`