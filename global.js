import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }


  body{
    /* display: flex; */
    background-color: #b3cad6;
    /* background-color: #cec5ab; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
 


  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }



`