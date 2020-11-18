import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";
import { firebase } from "./lib/firebase-prod";

import App from "./app";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
