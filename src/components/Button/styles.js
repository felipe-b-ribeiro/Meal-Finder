import styled from "styled-components";

export const SC_Button = styled.button`
    align-items: center;
    background-color: ${({color}) => color || 'var(--primary-color)'};
    border-radius: 10px;
    border: 1px solid black;
    corner-shape: bevel squircle;
    display: flex;
    gap: 4px;
    padding: 8px;
    transition: corner-shape ease-in 0.2s;

    &.selected {
        background-color: black;
        border-radius: 12px;
        color: white;
        corner-shape: squircle;
    }
    
    &:hover { cursor: pointer; }
`;
