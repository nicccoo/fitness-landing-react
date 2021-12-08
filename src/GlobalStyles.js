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
        background: #F8F8F8;
        max-width: 100%;
    }

    h1,h2,h3,h4,h5 {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;