import styled from 'styled-components';

export const Container = styled.div`
    width: 90%; 
    margin: auto;
    margin: 2rem auto ;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 600px;
    background-color: #FFFFFF;

    border-radius: 8px;
    padding: 2.5rem;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 1rem auto;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

export const Text = styled.p`
    margin-left: 0.5rem;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const Termos = styled.p`
    color: #000;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: inline-block;
`
