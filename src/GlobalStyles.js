// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button {
    border: 2px solid transparent; /* Initial border to avoid layout shift */
    padding: 8px 16px; /* Adjust padding if needed */
    background: transparent; /* Ensures background doesn't interfere */
    color: inherit; /* Ensures text color is inherited */
    cursor: pointer; /* Pointer cursor for buttons */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
    outline: none; /* Remove default outline */
    
    &:hover {
      border-color: white; /* White outline on hover */
      box-shadow: 0 0 4px black; /* Black shadow for better visibility */
    }
  }
`;

export default GlobalStyle;
