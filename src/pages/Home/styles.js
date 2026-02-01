import styled from "styled-components";

export const SC_Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Bebas Neue";
  gap: 10px;
  height: var(--header-height);
  justify-content: center;
  padding: 10px;
  position: relative;

  & .menu-btn {
    position: absolute;
    top: 15px;
    left: calc(50vw - 40%);
    padding: 5px;
    background-color: transparent;
    border: none;
  }

  & nav {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    max-width: 93vw;
    scroll-snap-type: x mandatory;
    position: relative;

    > button {
      scroll-snap-align: start;
    }
  }
`;

export const SC_Main = styled.main`
  flex: 1;
  height: auto;
  min-height: 0;
  overflow-y: auto;
  padding: 10px min(1em, 8%);
  position: relative;
`;

export const SC_MealsGrid = styled.section`
  display: grid;
  gap: 20px 10px;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;

  @media (max-width: 768px) and (pointer: coarse){
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const SC_PageWrapper = styled.div`
  display: flex;
  height: calc(100vh - var(--header-height));
`;
