import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;


    }

    *, button, input{
        border:0;
        background: none;
        color:black;
    }
    ul{
        list-style: none;
    
    }

    :root {
    --gray-900: #121214;
    --gray-800: #202024;
    --gray-400: #7c8c84;
    --gray-200: #c4c4cc;
    --gray-100: #e1e1e6;


    --cyan-500: #81d8f7;
    --cyan-300: #9be1f8;


}

`;