import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body,
  html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background: ${props => props.theme.colors.light};
  }
`;
