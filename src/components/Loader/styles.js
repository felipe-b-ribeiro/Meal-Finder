import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        border-top-color: black;
    }

    10% {
        border-right-color: black;
    }

    25% {
        border-bottom-color: black;
    }

    34% {
        border-left-color: black;
    }

    50% {
        border-color: transparent;
    }

    62% {
        border-top-color: black;
    }

    72% {
        border-right-color: black;
    }

    95% {
        border-bottom-color: black;
    }

    100% {
        border-left-color: black;
    }
`;
const pulse = keyframes`
    0% {
        transform: scale(1) translateY(0);
    }
    50% {
        transform: scale(1.2) translateY(4px);
    }
    100% {
        transform: scale(1) translateY(0);
    }
`;

export const SC_Loader = styled.div`
  align-items: center;
  animation: ${rotate} 3s linear infinite;
  border-radius: 50%;
  border: 6px dotted transparent;
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transition: 500ms ease-in;
  translate: -50% -50%;
  width: 140px;
  gap: 8px;

  > span {
    animation: ${pulse} 1s linear infinite;
    transition: 500ms ease-in;
    > svg {
        filter:
        drop-shadow(-1px -1px 0 #000)
        drop-shadow(1px -1px 0 #000)
        drop-shadow(-1px  1px 0 #000)
        drop-shadow(1px 1px 0 #000);
    }
  }

  > h3 {
    bottom: 25px;
    color: ${({color}) => color || 'black'};
    text-shadow: 
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
    letter-spacing: 2px;
    animation: ${pulse} 1s linear infinite;
  }
`;
