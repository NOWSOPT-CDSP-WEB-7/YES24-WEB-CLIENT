import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
    }
    *{
        box-sizing: border-box;
    }
    html, body{
        overflow-x :  hidden;
        width: 375px;
    }
    #root, body, html {
    margin: 0 auto;
    padding:0;
    font-size: 62.5%;
}
    body{
        line-height: 1;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input {
        border: none;
        outline: none;
    }
`;

export default GlobalStyles;
