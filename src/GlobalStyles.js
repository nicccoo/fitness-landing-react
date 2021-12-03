import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
   :root {
       --primary: #a9db3f;
   }
   
   * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif !important;
    }

    body {
        background-image: linear-gradient(to right top, #2c394b, #273342, #232d3a, #1e2732, #1a212a);
    }

    h1,h2,h3,h4,h5 {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;