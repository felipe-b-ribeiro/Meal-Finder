import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { 
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SC_Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  display: ${({ preview }) => (preview ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.8s;
`;
