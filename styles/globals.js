import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Nunito Sans';
        color: ${(props) => props.fontColor};
        background-color: ${(props) => props.theme.bg};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * { 
        box-sizing:border-box;
    }
`;
