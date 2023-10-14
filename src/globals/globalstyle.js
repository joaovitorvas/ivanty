import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');    

    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        background-color: #00082E;
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

    @media (min-width: 1000px) {
        .headerTelasMenores {
          display: none;
        }
        .headerTelasMaiores {
            display: block;
        }
      }

    .BuyItem {
        display: block;
      }
      .BuyItemPC {
          display: none;
      }

    @media (min-width: 1000px) {
        .BuyItem {
          display: none;
        }
        .BuyItemPC {
            display: block;
        }
      }
`