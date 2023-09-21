import styled from "styled-components";

export const CardsContainer = styled.div`
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background: #7B87C2;
`

export const CardBox = styled.div`
    border-radius: 1rem;
    background: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CardPainting = styled.img`
    margin: .5rem;
    border-radius: 1rem;
    height: auto;
`
export const CardDetails = styled.div`

`

export const CardTitle = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: .75rem;
    margin-left: .75rem;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`