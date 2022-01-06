import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    };
    body{
        background: #111827;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
        overflow-y: auto;
    };
    h1, h2, h3{
        font-family: 'Piedra', cursive;
        color: #dadada;
    };
    p, input,textarea, button{
        font-family: 'Poppins', sans-serif;
        color: #dadada;
    }
    input, textarea, button{
        background-color: none;
        border: none;
        outline: none;
        resize: none;
    };
    a{
        color: #dadada;
        text-decoration: none;
        font-family:'Piedra', cursive;;
    }

 


`;
 
export {GlobalStyle};