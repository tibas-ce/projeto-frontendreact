import { createGlobalStyle } from "styled-components";
import backgroun from "./backgroun/background.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url(${backgroun});
        color: aliceblue;
    }
    
`;