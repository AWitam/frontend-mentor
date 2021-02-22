import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 

  :root {
    --primary-blue: hsl(220, 98%, 61%);
    --white: hsl(0, 0%, 100%);
    --linear-gradient: linear-gradient(140.63deg, #57DDFF 15.68%, #C058F3 87.37%);
    --font-light: 300;
    --font-regular: 400;
    --font-bold: 700;
    --font-sm: 1.2rem;
    --font-m: 1.4rem;
    --font-l: 1.8rem;
    --font-xl: 21rem;
  }

 
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
  
  html {
    font-size: 10px;
    
  }

  body {
    font-size: 1.8rem;
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
