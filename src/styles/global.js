import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color--primary-hover: #93D7AF;
        --color-secundary: #EB5757;

        --color--grey-1: #F5F5F5;
        --color--grey-2: #E0E0E0;
        --color--grey-3: #828282;
        --color--grey-4: #333333;

        --color--negative: #E60000;
        --color--warning: #FFCD07;
        --color--sucess: #168821;
        --color--information: #155BCB;


        --font-primary: "Inter", sans-serif;
    }

`