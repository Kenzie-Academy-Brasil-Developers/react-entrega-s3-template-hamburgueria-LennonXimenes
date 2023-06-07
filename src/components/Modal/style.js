import styled from "styled-components";

export const StyledModal = styled.dialog`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,.3);

    > div:nth-child(1) {
        position: relative;
        width: 100%;
        max-width: 400px;
        padding: 2rem;
        background-color: #FFFFFF;
    }
    
    > div > button {
        position: absolute;
        top: 0;
        left: 0;
    }
`



/*
modal OverLay = dialog
modal box = 2² div 
close btn = btn fechar


*/