import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }

    body {
        background-color: ${(props) => props.theme["blue-dark-1"]};
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
`;