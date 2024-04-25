import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    &{
--light-cyan: hsl(193, 38%, 86%);
--neon-green: hsl(150, 100%, 66%);
--grayish-blue: hsl(217, 19%, 38%);
--dark-grayish-blue: hsl(217, 19%, 24%);
--dark-blue: hsl(218, 23%, 16%);
    }
}

*,::after,::before{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html{
    font-size: 62.5%;
}


body{
    font-family: "Manrope", sans-serif;
    background-color: var(--dark-blue);
    color: var(--light-cyan);
    height: 100vh;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;

export default GlobalStyle;
