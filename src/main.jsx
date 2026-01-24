import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";     // Your main App component
import "./index.css";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


             // <-- Tailwind + DaisyUI styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
