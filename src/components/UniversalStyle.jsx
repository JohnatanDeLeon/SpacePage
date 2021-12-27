import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";
import Barlow from "../../public/fonts/Barlow-Regular.ttf";
import BarlowCondensed from "../../public/fonts/BarlowCondensed-Regular.ttf";
import Bellefair from "../../public/fonts/Bellefair-Regular.ttf";

export default createGlobalStyle`
@font-face {
        font-family: "Barlow";
        src: url(${Barlow}) format('truetype');
    }
    @font-face {
        font-family: "BarlowCondensed-Regular";
        src: url(${BarlowCondensed}) format('truetype');
    }
    @font-face {
        font-family: "Bellefair";
        src: url(${Bellefair}) format('truetype');
    }
    ${normalize}
    *:is(*, *::after, *::before, h1) {
        margin:0;
        padding:0;
        box-sizing: border-box;
    };
    body{
        height: 100vh;
        width: 100vw;
    }
`;
