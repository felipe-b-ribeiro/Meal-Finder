import styled from "styled-components";

export const SC_NoneMeals = styled.h1`
    align-items: center;
    background-color: lightgray;
    border-radius: 20px;
    border: 1px solid black;
    corner-shape: squircle;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 50%;
    padding: 15px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 768px) and (pointer: coarse) {
        font-size: 1.5rem;
        min-width: 70vw
    }


    > svg { filter: drop-shadow(-1px 1px 1px black) drop-shadow(1px -1px 1px black) }
`