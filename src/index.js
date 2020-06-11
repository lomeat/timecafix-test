import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import "normalize.css";

import { App } from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    background: #DF9047;
    display: flex;
    justify-content: center;
    padding: 0.5em;
    user-select: none;
    outline: none;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
