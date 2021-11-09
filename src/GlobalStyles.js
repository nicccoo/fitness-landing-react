import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
   :root {
       --primary: #a9db3f;
   }
   
   body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;