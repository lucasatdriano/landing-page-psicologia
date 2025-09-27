'use client';

import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
      
  body {
    position: relative;
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
    
  body::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 10px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.primary};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.primary} ${theme.colors.background};
  }
`;

export default GlobalStyle;
