import styled from "styled-components";

export const SC_Logo=styled.h1`
    text-shadow: 0px 0px 0px black;
    transition: 0.5s ease;
    letter-spacing: normal;
    display: flex;
    align-items: center;
    vertical-align: middle;
    text-box: trim-both;
    gap: 10px; 
    font-size: min(6vw + 5px, 2rem);

    > svg {
        transition: 0.5s ease;
    }

    &:hover {
        text-shadow: 4px 2px 10px ${({color}) => color || 'rgba(0, 0, 0, 0.5)'};
        cursor: pointer; 
        letter-spacing: 2px;
        > svg {
            filter: drop-shadow(4px 2px 10px ${({color}) => color || 'rgba(0, 0, 0, 0.5)'})
        }
    }
`