import styled from "styled-components";

export const SC_Input = styled.input`
    border-radius: 20px;
    border: 1px solid black;
    corner-shape: squircle;
    font-size: 1.2rem;
    outline: none;
    padding: 10px;

    @media (max-width: 768px) and (pointer: coarse) {
        width: 80%;
        padding: 7px;
        font-size: .8rem;
    }
`