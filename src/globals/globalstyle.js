import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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

      .About {
        display: block;
      }
      .AboutPC {
        display: none;
      }
      
      @media (min-width: 1000px) {
        .About {
          display: none;
        }
        .AboutPC {
          display: block;
        }
      }
`

  
