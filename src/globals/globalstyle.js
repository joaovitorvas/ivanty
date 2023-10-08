import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        background-color: #122D42;
    }

    a{
        text-decoration: none;
    }

    .headerTelasMenores {
        display: block;
      }
      .headerTelasMaiores {
          display: none;
      }

    @media (min-width: 821px) {
        .headerTelasMenores {
          display: none;
        }
        .headerTelasMaiores {
            display: block;
        }
      }
`