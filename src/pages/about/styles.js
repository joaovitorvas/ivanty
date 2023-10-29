import styled from "styled-components";

export const Container = styled.main`
    background: #122D42;
    padding: 1.5rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 1500px) {
        padding: 2rem 5rem;
    }
`

export const Title = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    text-align: left;
    display: inline-block;
    margin-top: 1rem;

    @media (min-width: 1000px) {
        font-size: 2rem;
       }
`

export const Ivanty = styled.h2`
    color: #F0E968;
    font-family: Playfair Display;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline-block;

    @media (min-width: 1000px) {
        font-size: 2rem;
       }
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-top: 1rem;

    @media (min-width: 1000px) {
        
      }
`

export const Text = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 1rem 0;

    @media (min-width: 1000px) {
       font-size: 1.5rem;
      }
`

export const Subtitle = styled.h3`
    color: #FFF;
    font-family: Roboto;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 1rem 0;

    @media (min-width: 1000px) {
        font-size: 1.5rem;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const SpacingContainer = styled.div`
      margin: 1rem;
`