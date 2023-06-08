import { FaTrash } from "react-icons/fa";

import styled from "styled-components";

export const StyledModal = styled.dialog`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    height: 100vh;
    width: 100%;

    padding: 10px;
    
    background: rgba(0,0,0,.3);
    
    > .container {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 355px;
        width: 100%;
        min-width: 260px;
        max-width: 500px;
        border-radius: 5px;
    }
`

export const StyledTitle = styled.div`
    height: 55px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 10px 20px 10px 20px;
        
    background-color: #27AE60;
    border-radius: 5px 5px 0px 0px;

    color: #FFFFFF;

    h2 {
        
    }

    button {
        background-color: transparent;
        border: none;
    }
`

export const StyledList = styled.div`
    width: 100%;
    height: 190px;
    max-height: 190px;
    
    display: flex;
    flex-direction: column;

    background-color: var(--color--grey-1);
    list-style: none;
    
    padding: 20px;

    overflow-y: auto;

    li {
        height: 80px;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        margin-bottom: 1rem;
    }

    div {
        display: flex;
        flex-direction: row;
    }

    img {
        height: 80px;
        width: 80px;
    }

    h3 {
        margin-left: 1rem;
    }
`

export const StyledFaTrash = styled(FaTrash)`
    color: #BDBDBD;

    &:hover{
        color: var(--color--grey-3);
    }
`

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    background-color: var(--color--grey-1);
    
    .line {
        padding: 10px;
        border-top: 1px solid var(--color--grey-2);
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        width: 100%;
        padding: 20px;
        background-color: var(--color--grey-2);

        margin-top: 20px;

        font-size: 16px;
        color: var(--color--grey-3);

        border-radius: 8px;
    }

    button:hover {
        background-color: var(--color--grey-3);
        color: var(--color--grey-1);
    }
`