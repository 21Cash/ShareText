// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset all default margins, paddings, and borders */

  /* Apply sans-serif font to the entire application */
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6; /* Set a base line-height for better readability */
    height: 100%;
    background-color: #121720;
  }

  /* Style all buttons */
  button {
    border: 2px solid transparent; /* Initial border to avoid layout shift */
    padding: 8px 16px; /* Adjust padding if needed */
    background: transparent; /* Ensures background doesn't interfere */
    color: inherit; /* Ensures text color is inherited */
    cursor: pointer; /* Pointer cursor for buttons */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
    outline: none; /* Remove default outline */

    &:hover {
      border-color: black; /* Black border on hover */
      box-shadow: 0 0 4px black; /* Black shadow for better visibility */
    }
  }

  /* Additional styles to ensure consistency across browsers */
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
