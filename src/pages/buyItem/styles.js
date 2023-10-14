import styled from "styled-components";

export const Container = styled.main`
    padding: 1.5rem;
    margin: 0 1rem;
    background: #122D42;
    margin-top: 1rem;

    @media screen and (min-width: 1000px) {
        margin: 2rem 8rem;
    }
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

    @media screen and (min-width: 1000px) {
        text-align: right;
    }

`

export const ProductAuthor = styled.p`
    margin-top: 0.5rem;

    color: #FFF;
    font-family: Roboto;
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 1000px) {
        text-align: right;
    }
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

    @media screen and (min-width: 1000px) {
        margin: 1rem;
    }
`

export const Button = styled.div`
    cursor: pointer;
    border-radius: 2rem;
    background: #2B47D0;
    padding: 1rem;
    margin: 2rem auto;
    text-align: center;
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 1000px) {
        margin-left: 5rem;
    }
`

export const Button2 = styled.div`
    cursor: pointer;
    border-radius: 2rem;
    background: #fff;
    padding: 1rem;
    margin: 2rem auto;
    text-align: center;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 1000px) {
        margin-left: 5rem;
    }
`

export const DescriptionContainer = styled.div`
    margin: 0 1rem;
    padding: 1rem;
`

export const DescriptionTitle = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 6rem;
    margin-bottom: 2rem;
`

export const DescriptionText = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 2rem;
`

export const GridContainerBuy = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const GridContainer3 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

export const Buttons = styled.div`
    position: relative;
    top: 3rem;
`