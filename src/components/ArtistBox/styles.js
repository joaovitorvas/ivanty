import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem;
    background: #122D42;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1rem;

    
    @media screen and (min-width: 600px) {
        margin: 1rem;
        border-radius: 1rem;
    }
`

export const ArtistPhoto = styled.img`
    width: 90%;
    height: auto;
    border-radius: 8rem;
    margin: auto;
`

export const ArtistName = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-align: center;
    margin-top: 1rem;
`

export const ArtistBio = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    margin-top: 1rem;
`

export const Button = styled.div`
    border-radius: 2rem;
    padding: 0.5rem;
    margin: 2rem auto;
    text-align: center;
    color: #fff;
    background: #2B47D0;
    cursor: pointer;
`