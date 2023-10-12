import styled from "styled-components";

export const DescriptionContainer = styled.div`
    background: #7B87C2;
    padding: 2rem 10rem;
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

    @media screen and (min-width: 600px) {
        font-size: 1.3rem;
    }
`

export const CategoriesContent = styled.main`
    padding: 0 10rem;
`