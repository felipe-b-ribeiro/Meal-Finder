import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, #root {
        min-height: 100dvh;
        overflow: hidden;
        font-family: 'Bebas Neue';
    }

    a {
        text-decoration: none;
        
        &:hover {
            cursor: pointer;
        }
    }

    .flx {display: flex;}
    .grd {display: grid;}
    .h100 {height: 100%}
    .hau {height: auto}
    .hfit {height: fit-content}
    .hvh {height: 100vh}
    .lsp-2 {letter-spacing: 2px}
    .mh0 {min-height: 0;}
    .pabs {position: absolute}
    .prel {position: relative}
    .tac {text-align: center}
    .w60 {width: 60%}
    .wau {width: auto}
    .wfit {width: fit-content}
    .frow {flex-direction: row}
    .fcol {flex-direction: column}
    .jbet {justify-content: space-between}
    .h100 {height: 100%}
    .g-10 {gap: 10px;}
    .g-5 {gap: 5px;}
`
export default GlobalStyles;