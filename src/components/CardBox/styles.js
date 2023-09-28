import styled from "styled-components"

export const CardsContainer = styled.div`
    margin: 1rem;
    padding: .5rem;
    border-radius: 1rem;
    background: #000;
`

export const CardBox = styled.div`
    border-radius: 2rem;
    background: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CardPainting = styled.img`
    margin: .5rem;
    border-radius: 1rem;
    height: 9rem;
    width: 100%;
`
export const CardDetails = styled.div`
    margin: auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 1rem 0;
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
    grid-template-columns: 2fr 3fr;
`

export const PaintingTitle = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const PaintingAuthor = styled.h3`
    color: #FFF;
    font-family: Roboto;
    font-size: 13px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
`

export const PaintingPrice = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`