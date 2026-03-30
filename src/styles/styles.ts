import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--background);
        font-family: "Inter", sans-serif;
    }

    input{
        font-family: "Inter", sans-serif;
    }

    button{
        cursor: pointer;
        font-family: "Inter", sans-serif;
    }

    a {
    text-decoration: none; 
  }
`;
