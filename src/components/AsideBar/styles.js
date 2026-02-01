import styled from "styled-components";

export const SC_Aside = styled.aside`
  border-right: 1px solid black;
  bottom: 0;
  font-size: .9rem;
  gap: 10px;
  height: calc(100vh - var(--header-height));
  left: 0;
  overflow-y: auto;
  padding: 10px;
  position: sticky;
  width: 20%;
  background-color: white;

  @media (max-width: 768px) and (pointer: coarse) {
    width: 70%;
    font-size: .7rem;
    position: fixed;
    left: 0;
    transform: translateX(-100%);
    z-index: 3000;
    transition: 0.5s ease-in-out;
    border-top: 1px solid black;

    &.open {
      transform: none;
    }
  }

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;

    > hr {
      margin: 13px 0;
      width: 90%;
    }

    > h1 {
      text-align: center;
    }
  }

  & footer {
    bottom: 0;
    display: flex;
    gap: 10px;
    position: absolute;
  }
`;