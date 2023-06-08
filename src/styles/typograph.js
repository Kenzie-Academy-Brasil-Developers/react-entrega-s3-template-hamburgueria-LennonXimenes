import styled, { css } from "styled-components";

export const Fonts = css`
    font-family: "Inter", sans-serif;
    margin-top: ${({marginTop}) => marginTop === "yes" ? "1rem" : "0rem"};
`

export const FontTitle = styled.h3`
    ${Fonts};
    font-size: 1.125rem;
    font-weight: 600;
`

export const FontParagraph = styled.p`
    ${Fonts};
    font-size: ${({fontSize}) => fontSize === "big" ? "1rem" : ".875rem"};
    font-weight: 600;
    color: ${({color}) => color === "green" ? "#27AE60" : "#333333"};
`

export const FontSmall = styled.small`
    ${Fonts};
    font-size: .75rem;
    color: ${({color}) => color === "grey3" ? "#333333" : "#828282"};
`
export const FontSpan = styled.small`
    ${Fonts};
    font-size: ${({fontSize}) => fontSize === "big" ? "1rem" : ".875rem"};
    color: ${({color}) => color === "grey3" ? "#333333" : "#828282"};
`