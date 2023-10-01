import styled from "styled-components";

export const ObrasEmDestaqueContainer = styled.div`
    width: 100%;
    padding: 1rem 0;
    margin-top: 2rem;
    background: #7B87C2;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const ObrasText = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 1rem;
`