import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./globalStyles";
import "normalize.css";
import { firebase } from "./lib/firebase-prod";

import App from "./app";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
