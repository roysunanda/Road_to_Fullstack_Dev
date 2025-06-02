// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import "./index.css";
// import { App } from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// ############## Tic-Tac-Toe ################

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./Tic-Tac-Toe/App";

import "./Tic-Tac-Toe/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <header>
      <img src='../public/Tic-Tac-Toe/game-logo.png' alt='' />
      <h1>Tic-Tac-Toe</h1>
    </header>
    <App />
  </StrictMode>
);
