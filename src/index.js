import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";

import App from "./App";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
