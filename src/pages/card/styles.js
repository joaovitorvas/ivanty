import styled from "styled-components"

export const CardItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;


  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
}

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
}

  @media screen and (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`

export const FinalizarCompra = styled.div`
    cursor: pointer;
    border-radius: 2rem;
    background: #2B47D0;
    padding: 1rem;
    margin: 2rem;
    text-align: center;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-bottom: 5rem;
`
export const Container = styled.main`
    @media screen and (min-width: 1500px) {
        margin: 2rem 10rem;
    }
`