import styled from "styled-components";

export const PhotoContainer = styled.div`
    position: relative;
    height: 5rem;
`
export const PerfilImage = styled.img`
    width: 100%;
    height: auto;
`

export const PerfilPhoto = styled.img`
    position: relative;
    border-radius: 174px;
    width: 8rem;
    height: auto;
    border-radius: 10.875rem;
    flex-shrink: 0;
    bottom: 5rem;
`

export const PerfilDescription = styled.div`
    padding: 2rem;
    background: #7B87C2;
    margin-bottom: 1rem;
`

export const PerfilName = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const PerfilHead = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const PerfilBio = styled.p`
    // margin: 2rem;
    color: #FFF;
    font-family: Roboto;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PaintingsList = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
`

export const PaintingThumbnail = styled.img`
    border: .3rem solid #000;
    width: 100%;
    height: 9rem;
`
