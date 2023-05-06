import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
        overflow: hidden;
    }

    ::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #202024;
    }

    ::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
    }
`;
