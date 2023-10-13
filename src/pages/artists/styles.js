import styled from 'styled-components'

export const Container = styled.main`
    margin: 1rem 0;
`

export const TextContainer = styled.div`
    padding: 1rem;
    background: #122D42; 
`
export const Text = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 1rem 0;
`

export const ListArtists = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    
    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr ;
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1500px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

`