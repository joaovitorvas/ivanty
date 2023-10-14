import styled from "styled-components";

export const Container = styled.main`
    margin: 1.5rem;
    padding: 1.5rem;    
    background: #122D42;
`

export const CardImage = styled.img`
`

export const CardTitle = styled.p`
    margin-top: 1.5rem;

    color: #FFF;
    font-family: Roboto;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const CardPrice = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const CardAuthor = styled.p`
    margin-top: .5rem;

    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`