import styled, { css } from "styled-components";

export const Fonts = css`
    font-family: "Inter", sans-serif;
`

export const FontTitle = styled.h3`
    ${Fonts};
    font-size: 1.125rem;
`

export const FontParagraph = styled.p`
    ${Fonts};
    font-size: ${({fontSize}) => fontSize === "big" ? "1rem" : ".875rem"};
    font-weight: 600;
    color: ${({color}) => color === "grey3" ? "#828282" : "#333333"};

`

export const FontSmall = styled.small`
    ${Fonts};
    font-size: .75rem;
`

