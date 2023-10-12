import styled from "styled-components";

export const PhotoContainer = styled.div`
    position: relative;
    height: 5rem;
`
export const PerfilImage = styled.img`
    width: 100%;
    height: auto;

    @media screen and (min-width: 600px) {
        height: 20rem;
    }
`

export const PerfilPhoto = styled.img`
    position: relative;
    border-radius: 174px;
    width: 8rem;
    height: auto;
    border-radius: 10.875rem;
    flex-shrink: 0;
    bottom: 5rem;

    @media screen and (min-width: 600px) {
        width: 13rem;
        height: auto;
        bottom: 10rem;
    }
`

export const PerfilDescription = styled.div`
    padding: 2rem;
    background: #7B87C2;
    margin-bottom: 1rem;

    @media screen and (min-width: 600px) {
        padding: 2rem 10rem;
    }
`

export const PerfilName = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    @media screen and (min-width: 600px) {
        font-size: 1.7rem;
    }
`

export const PerfilHead = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 600px) {
        font-size: 1.1rem;
    }
`

export const PerfilBio = styled.p`
    // margin: 2rem;
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 600px) {
        margin-top: 1rem;
        margin-bottom: 3rem;
        font-size: 1.1rem;
    }
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PaintingsList = styled.div`
    display: grid; 
    grid-template-columns: 1fr;
    padding: 0 1rem;

    @media screen and (min-width: 600px) {
        padding: 0 10rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`

export const PaintingThumbnail = styled.img`
    border: .3rem solid #000;
    width: 100%;
    height: 9rem;

    @media screen and (min-width: 600px) {
        border: .3rem solid #000;
        width: 100%;
        height: 100%;
    }
`

export const ContainerNameBio = styled.div`
    text-align: right;
`