import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SC_Card = styled.article`
  background-color: ${({ color }) => color || "var(--primary-color)"};
  border-radius: 10px;
  border: 1px solid black;
  corner-shape: ${({ corner }) => corner || "bevel"};
  display: flex;
  flex-direction: column;
  font-family: "Arial";
  gap: 12px;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  width: fit-content;
  max-width: 250px;

  @media (max-width: 768px) and (pointer: coarse) {
    flex-direction: row;
  }

  & .normal-img {
    border-radius: 20px;
    border: 1px solid black;
    corner-shape: ${({ corner }) => corner || "bevel"};
    height: 150px;
    position: relative;

    @media (max-width: 768px) and (pointer: coarse) {
      height: 100px;
    }

    &:hover {
      cursor: zoom-in;
    }
  }

  & .img-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    height: fit-content;
    width: fit-content;
  }

  & .meal-text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    height: 100%;

    @media (max-width: 768px) and (pointer: coarse) {
      justify-content: space-around;
      align-items: center;
    }
  }

  & .preview-img {
    border-radius: 0px;
    height: 60vh;
    animation: ${fadeIn} 0.8s;
    transition: 0.5s ease;

    @media (max-width: 768px) and (pointer: coarse) {
      width: 60vw;
      height: auto;
    }

    &:hover {
      cursor: zoom-in;
    }
  }

  & .zoom {
    height: 85vh;

    @media (max-width: 768px) and (pointer: coarse) {
      width: 80vw;
      height: auto;
    }

    &:hover {
      cursor: zoom-out;
    }
  }

  & .close-preview {
    border: none;
    background-color: red;
    width: 30px;
    height: 30px;
    z-index: 2000;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.8s;
    transition: 0.5s ease;

    &:hover {
      cursor: pointer;
      background-color: rgb(202, 37, 37);
    }
  }

  & .sound-btn {
    align-items: center;
    background-color: darkblue;
    border-radius: 50%;
    border: none;
    display: flex;
    height: 34px;
    justify-content: center;
    left: 50%;
    position: absolute;
    bottom: -15%;
    transform: translate(-50%, -50%);
    transition: 0.3s ease-in-out;
    width: 34px;

    @media (max-width: 768px) and (pointer: coarse) {
      width: 25px;
      height: 25px;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(200%);
      padding: 5px;
    }
  }

  & h5 {
    max-width: 150px;
    text-align: center;
    word-break: keep-all;
  }

  & a {
    align-items: center;
    background-color: darkblue;
    border: none;
    box-shadow: inset 0px 0px 5px 7px
      ${({ color }) => color || "var(--primary-color)"};
    color: white;
    display: flex;
    font-family: sans-serif;
    font-size: 14px;
    gap: 5px;
    justify-content: center;
    padding: 6px 12px;
    text-align: center;
    transition: 0.5s ease;
    max-width: 100%;

    @media (max-width: 768px) and (pointer: coarse) {
      font-size: 12px;
    }

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      border-radius: 10px;
      box-shadow: inset 0px 0px 1px 1.3px
        ${({ color }) => color || "var(--primary-color)"};
      corner-shape: ${({ corner }) => corner || "bevel"};
      letter-spacing: 1px;
    }
  }
`;
