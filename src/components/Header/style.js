import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 15px;

    height: 150px;
    background: var(--color--grey-1);

    .container {
        width: 100%;

        display: flex;
        justify-content: space-between
    }

    .container > img {
        height: 1.4281rem;
        width: 9.375rem;
    }

    form {
        height: 60px;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;

        border: 2px solid var(--color--grey-4);
        border-radius: 8px;

        background-color: #FFFFFF;

        :hover {
            border: 2px solid var(--color--grey-3);

        }
    }
    
    form > input {
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
        appearance: none;

        ::-webkit-search-cancel-button {
            appearance: none;
            display: none;
        }
        ::placeholder {
            color: var(--color--grey-2);
        }
    }

    form > button {
        height: 40px;
        width: 55px;
        background-color: var(--color-primary);
        border-radius: 8px;
    }

    @media (min-width: 320px) {
        form {
            padding: 10px 10px 10px 15px;
        }
    }
    
    @media (min-width: 768px) {
        height: 80px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;      

        form {
        height: 60px;
        width: 365px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 10px 15px;
        
        border: 2px solid var(--color--grey-2);
        border-radius: 8px;

        margin-left: 1rem;
        }
    }

    @media (min-width: 1024px) {
        padding: 10px 115px 10px 115px;
        
    }

`