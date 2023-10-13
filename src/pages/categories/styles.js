import styled from "styled-components";

export const DescriptionContainer = styled.div`
    background: #122D42;

    padding: 1rem;

    @media screen and (min-width: 600px) {
        // padding: 2rem 10rem;
    }
`

export const DescriptTitle = styled.p`
    // margin: 2rem;
    color: #FFF;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;


    @media screen and (min-width: 600px) {
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-size: 1.6rem;
    }
`

export const DescriptText = styled.p`
    // margin: 2rem;
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 1rem;

    @media screen and (min-width: 600px) {
        font-size: 1.3rem;
    }
`

export const CategoriesContent = styled.main`

    padding: 0;
    margin-bottom: 2rem;

    @media screen and (min-width: 600px) {
        padding: 0 10rem;
    }
`

export const PinturasLIst = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    
    @media screen and (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr;    
    }
    
`