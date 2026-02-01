import styled from "styled-components";

export const SC_SwitchShape = styled.article`
    border-radius: 20px;
    border: 1px solid black;
    corner-shape: squircle;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: fit-content;
    width: 80%;

    > button {
        align-items: center;
        background: transparent;
        border: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 5px;
        corner-shape: squircle;

        > div {
            background-color: ${({color}) => color || 'var(--primary-color)'};
            border-radius: 7px;
            height: 30px;
            width: 30px;
        }

        &:hover { cursor: pointer; }
    }

    > button:nth-child(1) {
        ${({ corner }) => corner === 'bevel' && `
            background-color: rgba(0, 0, 0, 0.1);
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            > div {
                border: 1px solid black; 
            }
        `}
        > div { corner-shape: bevel; }
    }
    > button:nth-child(2) {
        ${({ corner }) => corner === 'notch' && `
            background-color: rgba(0, 0, 0, 0.1);
            > div {
                border: 1px solid black; 
            }
        `}
        > div { corner-shape: notch; }
    }
    > button:nth-child(3) {
        ${({ corner }) => corner === 'scoop' && `
            background-color: rgba(0, 0, 0, 0.1);
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            > div {
                border: 1px solid black; 
            }
        `}
        > div { corner-shape: scoop; }
    }

    > button:nth-child(2) {
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
    
`