import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    input {
        border: none;
        background: transparent;
    }
`