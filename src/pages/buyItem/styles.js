import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;
    margin: 1rem;
    background: #3d3d3d;
`

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
`

export const ProductName = styled.p`
    margin-top: 1rem;
    color: #FFF;
    font-family: Roboto;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

`

export const ProductAuthor = styled.p`
    margin-top: 0.5rem;

    color: #FFF;
    font-family: Roboto;
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
`

export const ProductPrice = styled.p`
    margin-top: 1.5rem;

    color: #FFF;
    font-family: Roboto;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-align: right;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`