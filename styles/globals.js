import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Nunito Sans';
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.bg};


        .paginationBttns {
            min-width: 80%;
            height: 40px;
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 0px 20px;
        
        }

        .paginationBttns a {
            padding: 10px;
            margin: 8px;
            border-radius: 5px;
            border: 1px solid ${(props) => props.theme.buttonBorder};
            background-color: ${(props) => props.theme.accent};
            cursor: pointer;
	        box-shadow: rgb(0 0 0 / 5%) 0px 2px 2px 0px;

        }

        .paginationBttns a:hover {
            color: ${(props) => props.theme.fontColor};
            background-color: ${(props) => props.theme.bg};
        }

        .paginationActive a {
            color: ${(props) => props.theme.accent};
            background-color: ${(props) => props.theme.fontColor};
        }

        .paginationDisabled a {
            cursor: not-allowed;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * { 
        box-sizing:border-box;
    }

    
`;
