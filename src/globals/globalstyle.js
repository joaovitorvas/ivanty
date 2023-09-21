import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        background-color: #3d3d3d;
    }

    a{
        text-decoration: none;
    }
`