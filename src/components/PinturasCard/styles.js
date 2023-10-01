import styled from "styled-components";

export const PinturaImg = styled.img`
    width: 100%;
    height: auto;
    margin-top: 1rem;
`

export const PinturaContainer = styled.div`
    padding: 1.5rem;
    background: #000;
    margin-top: 1rem;

    @media screen and (min-width: 600px) {
        margin: 1rem;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PinturaTitle = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const PinturaAuthor = styled.h3`
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const PinturaPrice = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-top: 1.5rem;
    text-align: right;
`

export const PinturaDetails = styled.div`
    margin-top: 1.5rem;
`

export const GridContainer2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 85%;
    margin: 2rem auto;
`

export const BuyButton = styled.div`
    border-radius: 1.25rem;
    background: #7B87C2;
    padding: 1.25rem;
`

export const BuyButtonText = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const HeartIcon = styled.img`
    max-width: 2.8rem;
    height: auto;
    text-align: center;
    margin-left: 15%;
`

export const Icons = styled.div`
    width: 100%;
    
    justify-content: center;
`