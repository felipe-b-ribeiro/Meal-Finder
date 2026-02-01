import styled from "styled-components";

export const SC_SwitchColor = styled.article`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: fit-content;
    width: 70%;

    > button {
        border: 1px solid black;
        height: 40px;
        corner-shape: squircle;
        transition: 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer; 
            filter: brightness(0.8);
        }
    }

    > button:nth-child(1) {
        background-color: lightblue;
        border-top-left-radius: 20px;
        border-top: 2px solid black;
        border-left: 2px solid black;
    }
    > button:nth-child(2) {
        background-color: cyan;
        border-top: 2px solid black;
    }
    > button:nth-child(3) {
        background-color: blue;
        border-top: 2px solid black;
    }
    > button:nth-child(4) {
        border-top-right-radius: 20px;
        background-color: violet;
        border-top: 2px solid black;
        border-right: 2px solid black;
    }
    > button:nth-child(5) {
        background-color: red;
        border-left: 2px solid black;
    }
    > button:nth-child(6) {background-color: coral}
    > button:nth-child(7) {background-color: orange}
    > button:nth-child(8) {
        background-color: gold;
        border-right: 2px solid black;
    }
    > button:nth-child(9) {
        border-bottom-left-radius: 20px;
        background-color: greenyellow;
        border-left: 2px solid black;
        border-bottom: 2px solid black;
    }
    > button:nth-child(10) {
        background-color: lime;
        border-bottom: 2px solid black;
    }
    > button:nth-child(11) {
        background-color: green;
        border-bottom: 2px solid black;
    }
    > button:nth-child(12) {
        border-bottom-right-radius: 20px;
        background-color: teal;
        border-bottom: 2px solid black;
        border-right: 2px solid black;
    }
`