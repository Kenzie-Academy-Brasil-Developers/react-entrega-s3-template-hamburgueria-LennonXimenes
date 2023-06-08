import styled from "styled-components";

export const StyledUlList = styled.ul`
    max-height: calc(100vh - 150px);
    width: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-x: scroll;
    overflow-y: hidden;

    gap: 20px;
    padding: 35px 15px 0px 15px;


    li {
        height: 350px;
        width: 300px;

        display: flex;
        flex-direction: column;

        border: 2px solid var(--color--grey-2);
        border-radius: 5px;
    }

    li:hover {
        border: 2px solid var(--color-primary);

    }

    li > div {
        height: 150px;
        width: 100%;
        
        display: flex;
        justify-content: center;

        background-color: var(--color--grey-1);
    }

    li > div > img {
        height: 100%;
        width: fit-content;
    }

    li > h3, small, p {
        padding: 0 0 20px 20px;
    }

    li > button {
        height: 40px;
        width: 105px;
        
        margin: 0 0 25px 20px;

        border-radius: 8px;
        background-color: var(--color--grey-3);
        color: #FFFFFF;
    }
    li > button:hover {
        background-color: var(--color-primary);
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        margin: auto;

        max-height: calc(100vh - 80px);
        max-width: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        overflow-y: scroll;

        gap: 20px;
        padding: 35px 20px 10px 20px;
    }

    @media (min-width: 1440px) {
        display: flex;
        justify-content: start;
        margin: auto;
        padding: 35px 50px 10px 110px;
    }
`